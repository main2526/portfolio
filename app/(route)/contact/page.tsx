"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }

    // Creating the mailto link
    const mailtoLink = `mailto:johannyantoniorodriguezgmai@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage:${encodeURIComponent(formData.message)}`

    // Redirecting to the mail client with pre-filled data
    window.location.href = mailtoLink

    // Simulate form submission success
    setTimeout(() => {
      setIsSubmitted(true)
      toast.success("Message sent successfully")
    }, 1000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-4 lg:p-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 items-center">
                  <User className="mr-2 h-4 w-4" />
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Message Sent!</h2>
            <p className="text-gray-600">Thank you for contacting us. We'll respond soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
