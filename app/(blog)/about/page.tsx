import ImageBg from "@/components/image-bg"
import MyImage from '@/public/R-C.jpg'
export default function page() {
    return (
        <ImageBg src={MyImage} content="About"></ImageBg>
    )
}
