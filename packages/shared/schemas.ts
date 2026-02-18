import { z } from "zod";

export const Vector3 = z.tuple([z.number(), z.number(), z.number()]);
export const Matrix3 = z.tuple([Vector3, Vector3, Vector3]); // filas

export type Vector3 = z.infer<typeof Vector3>;
export type Matrix3 = z.infer<typeof Matrix3>;
