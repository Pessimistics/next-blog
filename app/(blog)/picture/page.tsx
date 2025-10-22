import ImageBg from "@/components/image-bg"
import MyImage from '@/public/image-3.jpg'
import { Metadata } from "next"
export const metadata: Metadata =
{
  title: 'Picture'
}
export default function page() {
  return (
    <ImageBg src={MyImage} content="Pictures"></ImageBg>
  )
}
