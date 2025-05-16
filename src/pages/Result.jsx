import React from 'react'

function Result() {
  const formData = JSON.parse(localStorage.getItem('formData')) || []

  return (
    <div className='w-full h-fit min-h-svh bg-purple-200 flex flex-col items-center'>
        <div className='mt-5 bg-white rounded-lg h-fit w-[50%] border-t-10 border-purple-500 p-5'>
            <span className='text-xl font-bold'>Hasil Survey Perokok</span>
            <p className='text-sm font-light'>Halaman ini menampilkan hasil input dari form survey perokok dalam bentuk tabel. Data yang ditampilkan mencakup informasi seperti nama responden, status merokok (ya/tidak), dan merek rokok yang digunakan</p>
        </div>
        <div className='mt-5 bg-white rounded-lg h-fit w-[50%] border-t-10 border-purple-500 p-5'>
            <table className='h-fit border-collapse border-2 w-full'>
                <thead>
                    <tr className='border-2'>
                        <th className='border-2'>No</th>
                        <th className='border-2'>Nama</th>
                        <th className='border-2'>Umur</th>
                        <th className='border-2'>Jenis Kelamin</th>
                        <th className='border-2'>Perokok</th>
                        <th className='border-2'>Merk Rokok</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data,index) => {
                        const cigar = Array.isArray(data.cigar) && data.cigar.length > 0 ? data.cigar.join(', ') : '-';
                        return (
                            <tr key={`table-row-${index+1}`} className='border-2 text-center'>
                            <td className='border-2'>{index+1}</td>
                            <td className='border-2'>{data.name}</td>
                            <td className='border-2'>{data.age}</td>
                            <td className='border-2'>{data.gender}</td>
                            <td className='border-2'>{data.smoker}</td>
                            <td className='border-2'>{cigar}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Result