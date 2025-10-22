import ImageBg from "@/components/image-bg"
import MyImage from '@/public/image-1.jpg'
export default function page() {
  return (
    <ImageBg src={MyImage} content="Welcome to my website"></ImageBg>
  )
}
