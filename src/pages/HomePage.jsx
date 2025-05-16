import React, {useState} from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'

function HomePage() {
  const {register, handleSubmit} = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitData(value) {
    const formData = JSON.parse(localStorage.getItem('formData')) || []
    const newData = [...formData, value]
    localStorage.setItem('formData', JSON.stringify(newData))
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 1000)
    document.getElementById('form').reset()
  }

  return (
    <div className='w-full h-fit min-h-svh bg-purple-200 flex flex-row justify-center'>
        <div className='w-[50%] m-5'>
            <div className='h-fit bg-white mb-5 rounded-lg p-2 text-xl font-bold border-t-10 border-purple-500'>Survey Perokok
                <p className='text-sm font-light'>Form survey ini dirancang sebagai latihan pembelajaran dalam bootcamp Fullstack Web Developer. Tujuan utamanya adalah untuk mengimplementasikan pembuatan form web dengan fitur input data pengguna. Form ini bertujuan mengumpulkan informasi dasar mengenai kebiasaan merokok seseorang, termasuk apakah mereka merokok dan merek rokok apa saja yang biasa mereka gunakan. </p>
            </div>
            <form id='form' onSubmit={handleSubmit(submitData)} className='flex flex-col gap-2'>
                <div className='h-fit bg-white rounded-t-lg border-l-10 border-purple-300 p-5 flex flex-col gap-3'>
                    <Input {...register("name")} type="text" id="name" label="Siapakah nama Anda?" className='w-full'/>
                </div>
                <div className='h-fit bg-white border-l-10 border-purple-300 p-5 flex flex-col gap-3'>
                    <Input {...register("age")} type="number" id="age" label="Berapakah umur Anda?" className='w-full'/>
                </div>
                <div className='h-fit bg-white border-l-10 border-purple-300 p-5 flex flex-col gap-3'>
                    <Input {...register("gender")} type="radio" id="gender" options={['Laki-laki','Perempuan']} label="Apa jenis kelamin Anda?" className='flex flex-row gap-2 items-center'/>
                </div>
                <div className='h-fit bg-white border-l-10 border-purple-300 p-5 flex flex-col gap-3'>                
                    <Input {...register("smoker")} type="radio" id="smoker" options={['Ya','Tidak']} label="Apakah Anda perokok?" className='flex flex-row gap-2 items-center'/>
                </div>
                <div className='h-fit bg-white border-l-10 border-purple-300 p-5 flex flex-col gap-3'>
                    <Input {...register("cigar")} type="checkbox" id="cigar" options={['Gudang Garam Filter','Lucky Strike','Marlboro','Esse']} label="Apa merk rokok yang sudah pernah Anda coba?" className='flex flex-row gap-2 items-center'/>
                </div>
                <div className='h-fit bg-white rounded-b-lg border-l-10 border-purple-300 p-5 box-border flex flex-col gap-5'>
                    <button className='bg-blue-700 rounded-lg text-white py-2 px-5 hover:cursor-pointer w-[10svw]'>Submit</button>
                    <span className={`text-green-400 text-sm font-bold ${isSubmitted ? '' : 'hidden'}`}>*Data berhasil disimpan</span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default HomePage