import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormField as ShadcnFormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Controller, FieldValues, Path, Control } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const CustomFormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <ShadcnFormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" placeholder={placeholder} type={type} {...field} />
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />
);

export default CustomFormField;
