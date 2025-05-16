import React from 'react'

function Input({id, label, type, className, options, disabled, ...props}) {
  const baseStyle = 'h-12 bg-gray-50 rounded px-5 hover:border-b-5 border-purple-300 focus:outline-0'
  if(type==='checkbox') {
    return (
        <div className='flex flex-col gap-4'>
            <span  className='block font-medium'>{label}</span>
            {options.map((item,index) => (
                <div key={(id+index)} className='flex items-center gap-2'>
                    <input name={id} type={type} value={item} id={(id+'-'+item)} {...props} className='h-4 w-4' autoComplete='off' disabled={disabled}/>
                    <label htmlFor={(id+'-'+item)}>{item}</label>
                </div>
                )
            )}
        </div>
      )
  }
  if(type==='radio') {
    return (
        <div className='flex flex-col gap-4'>
            <span className='block font-medium'>{label}</span>
            <div className={className}>
                {options.map((item,index) => (
                    <div key={(id+index)} className='flex items-center gap-2'>
                        <input name={id} type={type} value={item} id={(id+'-'+item)} {...props} className='h-4 w-4' autoComplete='off'/>
                        <label htmlFor={(id+'-'+item)}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
      )
  }
  return (
    <div>
        <label htmlFor={id} className='block font-medium'>{label}</label>
        <div>
            <input type={type} id={id} className={[baseStyle, className].join(" ")} {...props} autoComplete='off'/>
        </div>
    </div>
  )
}

export default Input