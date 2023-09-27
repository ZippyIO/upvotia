'use client';

import { Button, Paper, Textarea, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { type ZonePayload, ZoneValidator } from '~/lib/validators/ZoneValidator';

const NewZoneForm = () => {
  const router = useRouter();
  const form = useForm<ZonePayload>({
    validate: zodResolver(ZoneValidator),
    initialValues: {
      name: '',
      description: '',
    },
  });

  const { mutate: createZone } = useMutation({
    mutationFn: async ({ name, description }: ZonePayload) => {
      const res = await fetch('/api/zone/create', {
        method: 'POST',
        body: JSON.stringify({
          name,
          description,
        }),
      });

      return res.json();
    },
    onSuccess: (data) => {
      router.push(`/z/${data}`);
    },
  });

  async function onSubmit(values: ZonePayload) {
    console.log(values);
    createZone(values);
  }

  return (
    <Paper p="md" bg="dark.8">
      <Title order={3}>Create Zone</Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          variant="filled"
          withAsterisk
          label="Name"
          placeholder="Dogs"
          {...form.getInputProps('name')}
        />
        <Textarea
          variant="filled"
          withAsterisk
          label="Description"
          mt="sm"
          {...form.getInputProps('description')}
        />
        <Button variant="light" type="submit" mt="md" className="w-full">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default NewZoneForm;
