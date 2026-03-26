import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <main className='flex flex-col items-center space-y-1.5 py-20'>
            <h1 className='text-3xl'>Image Cropper</h1>
            <p className='text-muted-foreground text-center'>Quickly crop, adjust, and refine your images with a clean and intuitive interface.</p>
            <div className='flex items-center gap-4 mt-2'>
                <Button variant="default" size="lg">
                    <Link href="">Try it Out</Link>
                </Button>
                <Button variant="outline" size="lg">
                    <Link href="https://github.com/goodwin-omollo/image-cropper" target="_blank">
                        GitHub
                    </Link>
                </Button>
            </div>
        </main>
    )
}

export default Hero