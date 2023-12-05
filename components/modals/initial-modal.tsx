"use client";

import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogTitle, DialogHeader
} from '@/components/ui/dialog'
import {useForm} from "react-hook-form";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';


const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Server name is required',
  }),
  imageUrl: z.string().min(1, {
    message: 'Server image is required'
  })
})

export const InitialModal = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      imageUrl: ''
    }
  })
  return (
    <Dialog open={true}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>

          <DialogDescription className="test-center text-zinc-500">
            Give your server a personality that has a name and image
          </DialogDescription>
        </DialogHeader>

      </DialogContent>
    </Dialog>
  )
}
