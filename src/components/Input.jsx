import React from 'react'

/**
 * @typedef {Object} InputProps
 * @property {string} id Identifier
 * @property {string} label Label for the input
 * @property {'text' | 'number' | 'checkbox' | 'radio'} type Input types
 * @property {string} [className] Tailwind CSS classes
 * @property {string[]} [options] Options for checkbox/radio inputs
 * @property {boolean} [disabled] Disabled checkbox input
 * @property {React.InputHTMLAttributes<HTMLInputElement>} [props]
 */

/**
 *
 * @param {InputProps} props
 * @param {string} props.id Identifier
 * @param {string} props.label Label for the input
 * @param {'text' | 'number' | 'checkbox' | 'radio'} props.type Input types
 * @param {string} [props.className] Tailwind CSS classes
 * @param {string[]} [props.options] Options for checkbox/radio inputs
 * @param {boolean} [props.disabled] Disables input (checkbox only)
 * @param {React.InputHTMLAttributes<HTMLInputElement>} [props]
 * @returns
 */

function Input({id, label, type, className, options, disabled, error, ...props}) {
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
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
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
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
      )
  }
  return (
    <div>
        <label htmlFor={id} className='block font-medium'>{label}</label>
        <div>
            <input type={type} id={id} className={[baseStyle, className].join(" ")} {...props} autoComplete='off'/>
        </div>
        {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  )
}

export default Input