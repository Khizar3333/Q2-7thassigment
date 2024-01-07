import Image from 'next/image'
import image1 from "@/public/image1.jpg"
import mobile1 from "@/public/mobile.avif"
import mobile2 from "@/public/mobile2.jpg"
import building2 from "@/public/building2.jpg"
import sky from "@/public/sky.jpg"
import building3 from "@/public/building3.jpg"


export default function Home() {



 
  return (
    <>

<div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-4 my-12 max-w-5xl mx-auto">
   
    <div className='sm:col-span-2 '>
  <div className="relative w-full h-full ">
    <Image src={image1} alt={'image1'} className='rounded-lg object-fill w-full h-full'/>
    <div className="absolute inset-0 bg-[#374e61] mix-blend-color"></div>
  </div>
</div>
    
     <div className='sm:row-span-2'>
  <div className="relative w-full h-full">
    <Image src={mobile1} alt={'image1'} className='object-fill w-full h-full'/>
    <div className="absolute inset-0 bg-[#556b7f] mix-blend-hard-light"></div>
  </div>
</div>
    <div className='sm:row-span-2'>
      <Image src={mobile2} alt={'mobile'}  className='object-fill w-full h-full rounded-lg'/>

    </div>
    <div >
      <Image src={building2} alt={'building'}  className='object-fill w-full h-full rounded-lg'/>

    </div>
    <div className='sm:col-span-2'>
      <div className='w-full'>

      
    <Image src={building3} alt="sky" className="object-cover w-screen  max-w-full rounded-lg" />
      </div>
      
    </div>
    
    
</div>
    
    </>
  )
}
