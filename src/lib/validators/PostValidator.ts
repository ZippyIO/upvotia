import { z } from 'zod';

export const PostValidator = z.object({
  title: z.string().min(2).max(255),
  content: z.string().min(2).max(4096),
  zoneId: z.string(),
});

export type PostPayload = z.infer<typeof PostValidator>;
