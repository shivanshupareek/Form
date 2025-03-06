import * as z from "zod";

const nameSchema = z
  .string()
  .min(2, "min 2 characters")
  .max(50, "max 50 characters")
  .regex(
    /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
    "Only letters, spaces, hyphens (-), and apostrophes (')"
  )
  .trim();

const formSchema = z.object({
  name: nameSchema,
});

export default formSchema;
