'use client';

import { Button, Paper, Textarea, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { type z } from 'zod';

import { type PostPayload, PostValidator } from '~/lib/validators/PostValidator';

type Props = {
  zone: { id: string; name: string };
};

const FormSchema = PostValidator.omit({ zoneId: true });
type FormValues = z.infer<typeof FormSchema>;

const NewPostForm = ({ zone }: Props) => {
  const router = useRouter();
  const form = useForm<FormValues>({
    validate: zodResolver(FormSchema),
    initialValues: {
      title: '',
      content: '',
    },
  });

  const { mutate: createPost } = useMutation({
    mutationFn: async ({ title, content, zoneId }: PostPayload) => {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
          zoneId,
        }),
      });

      return res.json() as unknown as { postId: string; zoneName: string };
    },
    onSuccess: ({ postId, zoneName }) => {
      router.push(`/z/${zoneName}/${postId}`);
    },
  });

  function onSubmit(values: FormValues) {
    const payload: PostPayload = {
      title: values.title,
      content: values.content,
      zoneId: zone.id,
    };

    createPost(payload);

    console.log(values);
  }

  return (
    <Paper p="md" bg="dark.8">
      <Title order={3}>Create Post</Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput disabled value={zone.name} label="Zone" variant="filled" mt="sm" />
        <TextInput
          variant="filled"
          withAsterisk
          label="Title"
          mt="sm"
          {...form.getInputProps('title')}
        />
        <Textarea
          variant="filled"
          withAsterisk
          label="Content"
          mt="sm"
          {...form.getInputProps('content')}
        />
        <Button variant="light" type="submit" mt="md" className="w-full">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default NewPostForm;
