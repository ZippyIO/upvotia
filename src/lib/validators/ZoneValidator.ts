import { z } from 'zod';

export const ZoneValidator = z.object({
  name: z.string().min(2).max(255),
  description: z.string().min(2).max(255),
});

export type ZonePayload = z.infer<typeof ZoneValidator>;
