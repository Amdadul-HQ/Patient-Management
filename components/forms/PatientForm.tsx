"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import CoustomeFrom from "../ui/CoustomeFrom"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { userFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
    INPUT= 'input',
    TEXTAREA= 'textarea',
    PHONE_INPUT= 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER =  'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton'
}
 

 
const PatientForm=()=> {
  const [isLoading,setIsLoading] = useState(false)
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name:'',
      email:'',
      phone:''
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit({name,email,phone}: z.infer<typeof userFormValidation>) {
  setIsLoading(true)
    try {
      const userData = {
        name,
        email,
        phone
      }
      // const user = await createUser(userData)
      // if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      
    }
  }
    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 🙋🏻‍♂️</h1>
            <p className="text-dark-700">Get Started with Appointments.</p>
        </section>
        <CoustomeFrom
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='name'
        label='Full name'
        placeholder='Jhon Dao'
        iconSrc ='/assets/icons/user.svg'
        iconAlt = 'user'
        />
        <CoustomeFrom
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='email'
        label='Email'
        placeholder='Jhondeo@gmail.com'
        iconSrc ='/assets/icons/email.svg'
        iconAlt = 'email'
        />
        <CoustomeFrom
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name='phone'
        label='Phone Number'
        placeholder='017xxxxx0'
        iconSrc ='/assets/icons/phone.svg'
        iconAlt = 'phone'
        />
        <SubmitButton isLoading={isLoading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
    );
};

export default PatientForm;