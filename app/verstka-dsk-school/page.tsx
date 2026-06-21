"use client"

import { useEffect, useRef, useState } from "react"

export default function Home() {
      const [isModalOpen, setIsModalOpen] = useState(false)
      const minPrice = 5000
      const maxPrice = 100000
      const [priceFrom, setPriceFrom] = useState(String(minPrice))
      const [priceTo, setPriceTo] = useState(String(maxPrice))
      const [dragging, setDragging] = useState<"from" | "to" | null>(null)
      const sliderRef = useRef<HTMLDivElement | null>(null)

      const normalizePrice = (value: string) => {
        const digits = value.replace(/[^\d]/g, "")
        return digits
      }

      const formatPrice = (value: string) => {
        if (!value) return ""
        return new Intl.NumberFormat("ru-RU").format(Number(value))
      }

      const priceFromNumber = Math.max(minPrice, Math.min(maxPrice, Number(priceFrom || minPrice)))
      const priceToNumber = Math.max(minPrice, Math.min(maxPrice, Number(priceTo || maxPrice)))
      const fromPercent = ((priceFromNumber - minPrice) / (maxPrice - minPrice)) * 100
      const toPercent = ((priceToNumber - minPrice) / (maxPrice - minPrice)) * 100

      const updatePriceFromPointer = (clientX: number, handle: "from" | "to") => {
        const track = sliderRef.current
        if (!track) return

        const rect = track.getBoundingClientRect()
        const nextValue = Math.round((((clientX - rect.left) / rect.width) * (maxPrice - minPrice) + minPrice) / 1000) * 1000
        const clampedValue = Math.max(minPrice, Math.min(maxPrice, nextValue))

        if (handle === "from") {
          setPriceFrom(String(Math.min(clampedValue, priceToNumber)))
        } else {
          setPriceTo(String(Math.max(clampedValue, priceFromNumber)))
        }
      }

      useEffect(() => {
        if (!dragging) return

        const handlePointerMove = (event: PointerEvent) => updatePriceFromPointer(event.clientX, dragging)
        const handlePointerUp = () => setDragging(null)

        window.addEventListener("pointermove", handlePointerMove)
        window.addEventListener("pointerup", handlePointerUp)

        return () => {
          window.removeEventListener("pointermove", handlePointerMove)
          window.removeEventListener("pointerup", handlePointerUp)
        }
      }, [dragging, priceFromNumber, priceToNumber])

      useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            setIsModalOpen(false)
          }
        }

        if (isModalOpen) {
          document.body.style.overflow = "hidden"
          window.addEventListener("keydown", handleEscape)
        }

        return () => {
          document.body.style.overflow = ""
          window.removeEventListener("keydown", handleEscape)
        }
      }, [isModalOpen])

      return (
        <>
   <div
    className="font-raleway bg-red-00 w-full min-h-screen bg-top bg-no-repeat flex flex-col"
    style={{
      backgroundImage: "url('bg.webp'), url('bg.webp'), url('bg.webp'), url('bg.webp')",
      backgroundSize: "450px auto, 450px auto, 530px auto, 640px auto",
      backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
      backgroundPosition: "left -100px top 100px, right -100px top 1200px, left 0px top 2400px, right -0px top 3600px",
    }}
  >
    <div className="max-w-[1350px] px-6 lg:px-14 mx-auto flex flex-col py-6 lg:gap-8 gap-6 min-h-screen">
  
      {/* header */}
      <div className="flex flex-row gap-4">

        {/* header - full */}
        <div className="hidden md:text-sm xl:text-xl lg:flex flex-row gap-6 my-auto">
            <div>Конгрессы</div>
            <div>Вебинары</div>

             <details className="group relative flex flex-row items-center [&[open]_.arrow]:rotate-[225deg] [&[open]_.dropdown]:flex">
              <summary className="flex flex-row gap-2.5 cursor-pointer items-
            center list-none [&::-webkit-details-marker]:hidden">
                <div className="group-hover:text-blue-800">Курсы</div>
                <span className="arrow block w-2.5 h-2.5 border-r-2 border-b-2
            border-black group-hover:border-blue-800 rotate-45 transition-
            transform duration-300 shrink-0 mt-1 xl:mt-2"></span>
              </summary>

              <div className="dropdown absolute top-full left-0 mt-3 hidden
            flex-col z-10 bg-gradient-to-b from-[#013AAF] to-[#0056C5] text-
            white text-xl rounded-xl p-3 leading-8 text-white">
                <a href="#">Терапия</a>
                <a href="#">Эндодонтия</a>
                <a href="#">Реставрация</a>
              </div>
            </details>

            <div>Бесплатное обучение</div>
            <div>Лекторы</div>
            <div>Вопросы</div>
          </div>





        {/* header - all */}
        <div className="hidden lg:flex text-xl font-bold font-raleway min-w-24 my-auto text-[#0039AE]">DSK-MED</div>
        <div className="flex lg:hidden w-20 h-9 bg-fill bg-no-repeat mt-1.5" style={{
      backgroundImage: "url(logo.png)"}}></div>
        <div className="flex justify-end flex-col ml-auto">
          <div className="gap-1 flex my-auto">
            <div className="my-auto"><svg width="13" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3927 14.1508C11.7081 14.1508 10.0596 13.8019 8.44717 13.1039C6.83474 12.406 5.37273 11.4013 4.06114 10.0897C2.74954 8.79011 1.74479 7.33111 1.04687 5.71267C0.348957 4.09423 -2.24344e-10 2.4427 0 0.758079C0 0.517419 0.0661815 0.330908 0.198545 0.198545C0.330908 0.0661815 0.517419 0 0.758079 -1.42262e-10L4.36798 -8.19702e-10C4.53644 -8.51316e-10 4.68986 0.0571567 4.82824 0.17147C4.96662 0.285784 5.05386 0.421155 5.08996 0.577584L5.63144 3.646C5.65551 3.81446 5.64949 3.96487 5.61339 4.09724C5.5773 4.2296 5.52315 4.33188 5.45095 4.40408L3.5377 6.35342C3.76633 6.76255 4.03707 7.16264 4.34993 7.55372C4.66279 7.94479 5.01776 8.33887 5.41485 8.73596C5.77584 9.08492 6.14285 9.40981 6.51587 9.71063C6.88889 10.0115 7.26793 10.2762 7.65299 10.5048L9.63843 8.59156C9.7347 8.4953 9.84299 8.42912 9.96332 8.39302C10.0837 8.35692 10.204 8.3509 10.3243 8.37497L13.5371 9.06085C13.7056 9.10898 13.85 9.19622 13.9703 9.32257C14.0906 9.44891 14.1508 9.5903 14.1508 9.74673L14.1508 13.3927C14.1508 13.6334 14.0846 13.8199 13.9523 13.9523C13.8199 14.0846 13.6334 14.1508 13.3927 14.1508Z" fill="#BBBCBC"/>
</svg>
</div>
            <div className="text-sm lg:text-lg font-gilroy font-bold">8 (800) 234-59-56</div>
          </div>
          <div className="underline flex ml-auto text-xs">Заказать звонок</div>
        </div>
        <div className="lg:hidden flex flex-row gap-3">
          <div className="bg-gradient-to-b from-[#013AAF] to-[#0056C5] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.15883 8.48518C6.97774 8.48518 5.97537 8.07335 5.15172 7.2497C4.32806 6.42605 3.91624 5.42368 3.91624 4.24259C3.91624 3.0615 4.32806 2.05913 5.15172 1.23548C5.97537 0.411827 6.97774 0 8.15883 0C9.33991 0 10.3423 0.411827 11.1659 1.23548C11.9896 2.05913 12.4014 3.0615 12.4014 4.24259C12.4014 5.42368 11.9896 6.42605 11.1659 7.2497C10.3423 8.07335 9.33991 8.48518 8.15883 8.48518ZM0 15.1754V14.3129C0 13.6757 0.151521 13.1007 0.454563 12.5879C0.757605 12.0751 1.16555 11.6865 1.67839 11.4224C2.70407 10.894 3.76083 10.4977 4.84867 10.2335C5.93652 9.96931 7.0399 9.83721 8.15883 9.83721C9.27775 9.83721 10.3811 9.96931 11.469 10.2335C12.5568 10.4977 13.6136 10.894 14.6393 11.4224C15.1521 11.6865 15.56 12.0751 15.8631 12.5879C16.1661 13.1007 16.3177 13.6757 16.3177 14.3129V15.1754C16.3177 15.8747 16.0807 16.4614 15.6067 16.9354C15.1327 17.4094 14.546 17.6464 13.8467 17.6464H2.47096C1.77163 17.6464 1.18497 17.4094 0.710983 16.9354C0.236994 16.4614 0 15.8747 0 15.1754Z" fill="white"/>
</svg>

          </div>
          <div className=" my-auto w-9 h-9 rounded-lg flex justify-center items-center bg-[#F0F4F6]">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.924731 11.0968C0.662724 11.0968 0.4431 11.0082 0.26586 10.8309C0.0886201 10.6537 0 10.4341 0 10.172C0 9.91004 0.0886201 9.69041 0.26586 9.51317C0.4431 9.33593 0.662724 9.24731 0.924731 9.24731H15.7204C15.9824 9.24731 16.2021 9.33593 16.3793 9.51317C16.5565 9.69041 16.6452 9.91004 16.6452 10.172C16.6452 10.4341 16.5565 10.6537 16.3793 10.8309C16.2021 11.0082 15.9824 11.0968 15.7204 11.0968H0.924731ZM0.924731 6.47312C0.662724 6.47312 0.4431 6.3845 0.26586 6.20726C0.0886201 6.03002 0 5.81039 0 5.54839C0 5.28638 0.0886201 5.06676 0.26586 4.88952C0.4431 4.71228 0.662724 4.62366 0.924731 4.62366H15.7204C15.9824 4.62366 16.2021 4.71228 16.3793 4.88952C16.5565 5.06676 16.6452 5.28638 16.6452 5.54839C16.6452 5.81039 16.5565 6.03002 16.3793 6.20726C16.2021 6.3845 15.9824 6.47312 15.7204 6.47312H0.924731ZM0.924731 1.84946C0.662724 1.84946 0.4431 1.76084 0.26586 1.5836C0.0886201 1.40636 0 1.18674 0 0.924731C0 0.662724 0.0886201 0.4431 0.26586 0.26586C0.4431 0.0886201 0.662724 0 0.924731 0H15.7204C15.9824 0 16.2021 0.0886201 16.3793 0.26586C16.5565 0.4431 16.6452 0.662724 16.6452 0.924731C16.6452 1.18674 16.5565 1.40636 16.3793 1.5836C16.2021 1.76084 15.9824 1.84946 15.7204 1.84946H0.924731Z" fill="#0139AE"/>
</svg>

          </div>
        </div>
          
      </div>

        {/* header2 - search */}
        <div className="flex-row flex gap-6">
          <div className="hidden lg:flex min-w-30 bg-contain bg-no-repeat my-1" style={{backgroundImage:"url(logo-lg.png)"}}></div>
          <div className="relative flex w-full">
            <input className="flex w-full bg-gradient-to-b from-gray-50 to-white border-2 lg:border-1 lg:border-gray-200 border-gray-300 rounded-xl lg:rounded-lg px-4 py-2 lg:py-3 pr-10 placeholder:text-sm placeholder:font-semibold font-semibold" type="text" placeholder="Поиск" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold pointer-events-none"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6824 13.6305L11.9894 9.93727C12.6169 8.93832 12.9811 7.75763 12.9811 6.49052C12.9811 2.9057 10.075 0 6.49027 0C2.90559 0 -0.000244141 2.9057 -0.000244141 6.49052C-0.000244141 10.0755 2.90545 12.9809 6.49027 12.9809C7.86922 12.9809 9.14647 12.5498 10.1975 11.8172L13.8465 15.4666C14.1001 15.7199 14.4325 15.846 14.7645 15.846C15.0969 15.846 15.4289 15.7199 15.6828 15.4666C16.1895 14.9593 16.1895 14.1377 15.6824 13.6305ZM6.49027 10.8781C4.06735 10.8781 2.10299 8.91385 2.10299 6.49079C2.10299 4.06773 4.06735 2.10337 6.49027 2.10337C8.91333 2.10337 10.8776 4.06773 10.8776 6.49079C10.8776 8.91385 8.91333 10.8781 6.49027 10.8781Z" fill="#BBBCBC"/>
</svg>
</span>
          </div>
          <div className="hidden lg:flex">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex text-sm text-center rounded-xl my-auto px-10 py-4 mx-auto bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold flex flex-row gap-2"
            >
              
                <svg className="my-auto" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.83077 7.10401C5.84194 7.10401 5.00273 6.75921 4.31315 6.06963C3.62356 5.38005 3.27877 4.54084 3.27877 3.552C3.27877 2.56317 3.62356 1.72396 4.31315 1.03437C5.00273 0.344791 5.84194 0 6.83077 0C7.81961 0 8.65882 0.344791 9.3484 1.03437C10.038 1.72396 10.3828 2.56317 10.3828 3.552C10.3828 4.54084 10.038 5.38005 9.3484 6.06963C8.65882 6.75921 7.81961 7.10401 6.83077 7.10401ZM0 12.7052V11.9831C0 11.4497 0.126857 10.9683 0.380572 10.5389C0.634286 10.1095 0.975825 9.78427 1.40519 9.56308C2.26391 9.12071 3.14866 8.78893 4.05943 8.56774C4.9702 8.34656 5.89398 8.23596 6.83077 8.23596C7.76757 8.23596 8.69135 8.34656 9.60212 8.56774C10.5129 8.78893 11.3976 9.12071 12.2564 9.56308C12.6857 9.78427 13.0273 10.1095 13.281 10.5389C13.5347 10.9683 13.6615 11.4497 13.6615 11.9831V12.7052C13.6615 13.2907 13.4631 13.7819 13.0663 14.1787C12.6695 14.5756 12.1783 14.774 11.5928 14.774H2.06875C1.48325 14.774 0.992089 14.5756 0.595253 14.1787C0.198418 13.7819 0 13.2907 0 12.7052Z" fill="white"/>
</svg>

              <div>Войти</div>
            </button>
          </div>
        </div>

        {/* slider */}
        <div className="w-full  mx-auto group">
          <div className="relative">
            {/* Скрытые переключатели */}
            <input type="radio" name="slider-nav" id="s1" className="peer/s1 hidden" defaultChecked />
            <input type="radio" name="slider-nav" id="s2" className="peer/s2 hidden" />
            <input type="radio" name="slider-nav" id="s3" className="peer/s3 hidden" />

            {/* Обертка для слайдов с overflow-hidden */}
            <div className="overflow-hidden rounded-4xl 
              peer-checked/s1:[&_.slides]:translate-x-0 
              peer-checked/s2:[&_.slides]:-translate-x-full 
              peer-checked/s3:[&_.slides]:-translate-x-[200%]">
              {/* Контейнер слайдов */}
              <div className="slides flex transition-transform duration-500 ease-in-out">
                {/* Слайд 1 */}
                <div className="min-w-full aspect-[1350/400] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-3xl shrink-0" style={{backgroundImage: `url(s1.webp)`}}>
                </div>
                {/* Слайд 2 */}
                <div className="min-w-full aspect-[1350/400] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-3xl shrink-0" style={{backgroundImage: `url(s1.webp)`}}>
                </div>
                {/* Слайд 3 */}
                <div className="min-w-full aspect-[1350/400] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-3xl shrink-0" style={{backgroundImage: `url(s1.webp)`}}>
                </div>
              </div>
            </div>

            {/* Кнопки Назад */}
            <label htmlFor="s3" className="hidden peer-checked/s1:flex absolute left-0 translate-x-[-50%] top-1/2 -translate-y-1/2 w-10 h-10  items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-l-2 border-t-2 border-blue-800 w-2.5 h-2.5 -rotate-45 ml-1"></span>
            </label>
            <label htmlFor="s1" className="hidden peer-checked/s2:flex absolute left-0 translate-x-[-50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-l-2 border-t-2 border-blue-800 w-2.5 h-2.5 -rotate-45 ml-1"></span>
            </label>
            <label htmlFor="s2" className="hidden peer-checked/s3:flex absolute left-0 translate-x-[-50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-l-2 border-t-2 border-blue-800 w-2.5 h-2.5 -rotate-45 ml-1"></span>
            </label>

            {/* Кнопки Вперед */}
            <label htmlFor="s2" className="hidden peer-checked/s1:flex absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-r-2 border-t-2 border-blue-800 w-2.5 h-2.5 rotate-45 mr-1"></span>
            </label>
            <label htmlFor="s3" className="hidden peer-checked/s2:flex absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-r-2 border-t-2 border-blue-800 w-2.5 h-2.5 rotate-45 mr-1"></span>
            </label>
            <label htmlFor="s1" className="hidden peer-checked/s3:flex absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-r-2 border-t-2 border-blue-800 w-2.5 h-2.5 rotate-45 mr-1"></span>
            </label>
          </div>

          {/* Индикаторы (Точки) */}
          <div className="flex justify-center gap-2 mt-4 group">
            <label htmlFor="s1" className="w-3 h-3 rounded-full cursor-pointer transition bg-gray-400  group-has-[#s1:checked]:bg-blue-600"></label>
            <label htmlFor="s2" className="w-3 h-3 rounded-full cursor-pointer transition bg-gray-400  group-has-[#s2:checked]:bg-blue-600"></label>
            <label htmlFor="s3" className="w-3 h-3 rounded-full cursor-pointer transition bg-gray-400  group-has-[#s3:checked]:bg-blue-600"></label>
          </div>
        </div>

    

      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-3 font-gilroy font-bold">
          
          {/* ЛЕВАЯ КОЛОНКА: Первый блок - вся высота */}
          <div className="lg:row-span-2">

              {/* web */}
              <div className="text-white rounded-2xl overflow-hidden bg-bottom bg-cover bg-no-repeat"
              style={{backgroundImage: `url(bg-1.webp),linear-gradient(266.35deg, #061122 9.01%, #0A1D36 99.03%)`}}>
                <input type="checkbox" id="webinar-toggle" className="peer hidden" />
                <label htmlFor="webinar-toggle" className="lg:pointer-events-none gap-1 cursor-pointer font-bold flex px-4 py-5 items-center text-xl uppercase">
                  <div className="lg:hidden w-10 flex items-center justify-center h-full my-auto">
                    <img className="w-9" src={'./play-circle.png'} />
                  </div>
                  <div className="w-6/12 lg:p-4 lg:pt-0 lg:h-14 lg:text-3xl">Вебинары</div>
                  <span className="lg:hidden ml-auto block w-2 h-2 border-r-2 border-b-2 border-white rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-auto lg:!h-120">
                  <div className="px-7 pb-5 pt-2 gap-3 lg:gap-1 flex flex-wrap">
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Эндодонтия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Реставрация</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Ортопедия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Гнатология</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Хирургия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Пародонтология</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Маркетинг и Бизнес</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Детская стоматология</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Зуботехнические курсы</div>
     
                  </div>
                </div>
              </div>
              {/* end */}
            
          </div>

          {/* ПРАВАЯ КОЛОНКА: Сетка для блоков  */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
            
            {/*  рядом в одну строку */}
            <div className="col-span-2 lg:col-span-1 text-sm">
              {/* courses */}
              <div className="bg-white/10 border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] rounded-2xl overflow-hidden ">
                <input type="checkbox" id="course-toggle" className="peer hidden" />
                <label htmlFor="course-toggle" className="lg:pointer-events-none gap-1 cursor-pointer font-bold flex px-4 py-5 items-center text-xl uppercase">
                  <div className="lg:hidden w-10 flex items-center justify-center h-full my-auto">
                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.48304 2.9643e-07H12.2714C13.5211 -1.05399e-05 14.529 -1.9299e-05 15.3452 0.0666669C16.1856 0.135329 16.9237 0.280394 17.6067 0.628363C18.6914 1.18109 19.5734 2.06304 20.1261 3.14782C20.4741 3.83074 20.6191 4.56889 20.6878 5.40928C20.7545 6.22545 20.7545 7.23332 20.7545 8.48288L20.7545 21.4039C20.7545 21.8024 20.7545 22.1683 20.7304 22.4666C20.7057 22.7727 20.6473 23.1627 20.4294 23.5283C20.0444 24.1745 19.3684 24.5923 18.6183 24.6477C18.1938 24.679 17.8189 24.5568 17.5341 24.4421C17.2564 24.3302 16.9292 24.1666 16.5728 23.9883L16.5356 23.9697C15.7901 23.597 15.5695 23.4937 15.354 23.4396C15.0639 23.3666 14.7624 23.3508 14.4662 23.393C14.2463 23.4243 14.0161 23.5039 13.2357 23.7965L12.6259 24.0252C12.0032 24.2591 11.5326 24.4358 11.0368 24.5074C10.5994 24.5706 10.1551 24.5706 9.71763 24.5074C9.22192 24.4358 8.75128 24.2591 8.12856 24.0252L7.51876 23.7965C6.73834 23.5039 6.50815 23.4243 6.28822 23.393C5.99207 23.3508 5.69053 23.3666 5.40042 23.4396C5.18499 23.4937 4.9644 23.597 4.21889 23.9697L4.1816 23.9884C3.82521 24.1666 3.49804 24.3302 3.2204 24.4421C2.93553 24.5568 2.56069 24.679 2.13617 24.6477C1.38604 24.5923 0.710073 24.1745 0.325044 23.5283C0.107142 23.1627 0.0488197 22.7727 0.0240705 22.4666C-5.02256e-05 22.1683 -2.53699e-05 21.8025 1.81674e-06 21.404L6.52238e-06 8.48303C-4.88609e-06 7.2334 -1.39556e-05 6.22548 0.0666726 5.40928C0.135335 4.56889 0.2804 3.83074 0.628369 3.14781C1.18109 2.06303 2.06304 1.18108 3.14782 0.628362C3.83075 0.280393 4.5689 0.135328 5.40928 0.0666661C6.22549 -2.02998e-05 7.23341 -1.10896e-05 8.48304 2.9643e-07ZM5.76513 5.76513C5.12833 5.76513 4.6121 6.28135 4.6121 6.91815C4.6121 7.55495 5.12833 8.07118 5.76513 8.07118H14.9893C15.6261 8.07118 16.1424 7.55495 16.1424 6.91815C16.1424 6.28135 15.6261 5.76513 14.9893 5.76513H5.76513ZM5.76513 10.3772C5.12833 10.3772 4.6121 10.8935 4.6121 11.5303C4.6121 12.1671 5.12833 12.6833 5.76513 12.6833H14.9893C15.6261 12.6833 16.1424 12.1671 16.1424 11.5303C16.1424 10.8935 15.6261 10.3772 14.9893 10.3772H5.76513ZM5.76513 14.9893C5.12833 14.9893 4.6121 15.5056 4.6121 16.1424C4.6121 16.7792 5.12833 17.2954 5.76513 17.2954H10.3772C11.014 17.2954 11.5303 16.7792 11.5303 16.1424C11.5303 15.5056 11.014 14.9893 10.3772 14.9893H5.76513Z" fill="#0139AE"/>
</svg>

                  </div>
                  <div className="w-6/12 lg:p-4 lg:text-3xl lg:pt-0 lg:h-14 text-[#0039AE]">Курсы</div>
                  <span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-blue-800 rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4 lg:hidden"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-auto lg:!h-46">
                  <div className="px-7 pb-5 pt-2 gap-3 lg:gap-1 flex flex-wrap">
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Эндодонтия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Реставрация</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Ортопедия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Гнатология</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Ортодонтия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Хирургия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Пародонтология</div>                    
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            <div className="col-span-2 lg:col-span-1 text-sm">
              {/* free */}
              <div className="bg-white/10 border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] rounded-2xl overflow-hidden ">
                <input type="checkbox" id="free-toggle" className="peer hidden" />
                <label htmlFor="free-toggle" className="lg:pointer-events-none gap-1 cursor-pointer font-bold flex px-4 py-5 items-center text-xl uppercase">
                  <div className="lg:hidden w-10 flex items-center justify-center h-full my-auto">
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.164065 4.81024C0.0557058 5.02403 -7.39415e-06 5.25851 7.3515e-10 5.49525V12.2186C7.3515e-10 12.7377 0.420803 13.1585 0.939891 13.1585C1.45898 13.1585 1.87978 12.7377 1.87978 12.2186V7.41308L7.12345 10.2065C8.06108 10.7064 8.70616 11.0503 9.40576 11.1879C10.0213 11.309 10.6563 11.309 11.2718 11.1879C11.9714 11.0503 12.6165 10.7064 13.5541 10.2065L19.2696 7.16178C19.747 6.90752 20.2951 6.65166 20.536 6.13397C20.7326 5.71137 20.7239 5.22528 20.5135 4.81023C20.2556 4.30126 19.6997 4.06289 19.2147 3.82373L13.3684 0.940048C12.4809 0.50193 11.8705 0.20058 11.214 0.0797817C10.6359 -0.0265939 10.0417 -0.0265939 9.4636 0.0797817C8.80711 0.20058 8.19666 0.501931 7.30916 0.940051L1.46292 3.82373C0.977902 4.06289 0.422032 4.30127 0.164065 4.81024Z" fill="#0139AE"/>
<path d="M3.23416 10.264C3.04634 10.1639 2.81962 10.3 2.81962 10.5128V13.2855L2.81958 13.3014C2.81882 13.6021 2.81805 13.907 2.9124 14.1961C2.99449 14.4476 3.12874 14.6789 3.30638 14.875C3.51126 15.1011 3.77757 15.2522 4.04001 15.4011L4.05091 15.4073L4.80201 15.8365C6.56003 16.8414 7.63206 17.4541 8.78853 17.6978C9.81078 17.9131 10.8667 17.9131 11.889 17.6978C13.0456 17.4541 14.1178 16.8412 15.8762 15.8361L16.6266 15.4073L16.6398 15.3998C16.9014 15.2512 17.1668 15.1005 17.3711 14.875C17.5487 14.6789 17.683 14.4476 17.7651 14.1961C17.8596 13.9065 17.8587 13.6019 17.8579 13.3008L17.8579 13.2945V10.5129C17.8579 10.3001 17.6311 10.164 17.4433 10.264L14.5603 11.7999C13.6582 12.2804 12.7027 12.8218 11.6346 13.0319C10.7795 13.2 9.89807 13.2 9.04301 13.0319C7.97459 12.8217 7.01954 12.2805 6.11732 11.7999L3.23416 10.264Z" fill="#0139AE"/>
</svg>

                  </div>
                  <div className="w-10/12 lg:p-4 lg:pt-0 lg:h-14 text-md lg:text-3xl text-[#0039AE]">Бесплатное обучение</div>
                  <span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-blue-800 rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4 lg:hidden"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-auto lg:!h-46">
                  <div className="px-7 pb-5 pt-2 gap-3 lg:gap-1 flex flex-wrap">
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Реставрация</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Эндодонтия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Ортопедия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Гнатология</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Ортодонтия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Пародонтология</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Хирургия</div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            
            <div className="col-span-2">
              {/* congress */}
              <div className="text-white rounded-2xl overflow-hidden bg-bottom bg-cover bg-no-repeat"
              style={{backgroundImage: `url(bg-2.webp),linear-gradient(266.35deg, #061122 9.01%, #0A1D36 99.03%)`}}>
                <input type="checkbox" id="congress-toggle" className="peer hidden" />
                <label htmlFor="congress-toggle" className="lg:pointer-events-none gap-1 cursor-pointer font-bold flex px-4 py-5 items-center text-xl uppercase">
                  <div className="lg:hidden w-10 flex items-center justify-center h-full my-auto">
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.94857 5.87333C7.94857 2.62958 10.4905 0 13.6261 0C16.7617 0 19.3037 2.62958 19.3037 5.87333C19.3037 9.11707 16.7617 11.7467 13.6261 11.7467C10.4905 11.7467 7.94857 9.11707 7.94857 5.87333Z" fill="white" fillOpacity="0.25"/>
<path d="M5.67755 19.6756C5.67755 16.5941 8.09238 14.096 11.0712 14.096H16.181C19.1599 14.096 21.5747 16.5941 21.5747 19.6756C21.5747 21.7841 19.9224 23.4933 17.8843 23.4933H9.36795C7.3298 23.4933 5.67755 21.7841 5.67755 19.6756Z" fill="white" fillOpacity="0.25"/>
<path d="M6.79335 2.2765C7.01945 1.8179 6.93056 1.26044 6.57406 0.901267C6.21756 0.542092 5.67652 0.464898 5.23934 0.710834C3.47362 1.70415 2.27102 3.64261 2.27102 5.87336C2.27102 8.10408 3.47359 10.0425 5.23928 11.0358C5.67646 11.2818 6.21749 11.2046 6.574 10.8454C6.93051 10.4863 7.0194 9.9288 6.79331 9.47021C6.26172 8.39198 5.96143 7.17067 5.96143 5.87339C5.96143 4.57608 6.26173 3.35475 6.79335 2.2765Z" fill="white" fillOpacity="0.25"/>
<path d="M22.0129 0.710838C21.5757 0.464902 21.0347 0.542096 20.6782 0.901272C20.3217 1.26045 20.2328 1.81791 20.4589 2.2765C20.9905 3.35475 21.2908 4.57609 21.2908 5.87339C21.2908 7.17067 20.9905 8.39197 20.4589 9.4702C20.2328 9.9288 20.3217 10.4863 20.6782 10.8454C21.0347 11.2046 21.5758 11.2818 22.013 11.0358C23.7786 10.0425 24.9812 8.10408 24.9812 5.87336C24.9812 3.64261 23.7786 1.70415 22.0129 0.710838Z" fill="white" fillOpacity="0.25"/>
<path d="M4.45678 16.2834C4.67531 15.8284 4.58633 15.2797 4.23625 14.9234C3.88617 14.5671 3.35434 14.4839 2.91814 14.7174C1.18715 15.6437 0 17.5153 0 19.6757C0 21.436 1.15075 22.9153 2.71449 23.3581C3.12813 23.4752 3.57027 23.3413 3.85749 23.0119C4.14472 22.6824 4.22802 22.2137 4.07284 21.8001C3.82623 21.1428 3.69041 20.4271 3.69041 19.6757C3.69041 18.4548 3.96657 17.304 4.45678 16.2834Z" fill="white" fillOpacity="0.25"/>
<path d="M24.3341 14.7174C23.8979 14.484 23.3661 14.5671 23.016 14.9234C22.6659 15.2797 22.5769 15.8284 22.7955 16.2834C23.2857 17.304 23.5618 18.4548 23.5618 19.6757C23.5618 20.4271 23.426 21.1428 23.1794 21.8001C23.0242 22.2137 23.1075 22.6824 23.3947 23.0119C23.682 23.3413 24.1241 23.4752 24.5377 23.3581C26.1015 22.9153 27.2522 21.436 27.2522 19.6757C27.2522 17.5153 26.0651 15.6437 24.3341 14.7174Z" fill="white" fillOpacity="0.25"/>
</svg>

                  </div>
                  <div className="w-6/12 lg:p-4 lg:pt-0 lg:h-14 lg:text-3xl">Конгрессы</div>
                  <span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-white rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4 lg:hidden"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-auto lg:!h-46.5">
                  <div className="px-7 pb-5 pt-2 gap-3 lg:gap-1 flex flex-wrap">
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Реставрация</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Эндодонтия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Хирургия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Ортодонтия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Эндодонтия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Гнатология</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Гнатология</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Зуботехнические курсы
</div>
   
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            
          </div>

        </div>


      
        {/* lk */}
        <div className="flex flex-col w-full p-0 lg:p-6 lg:py-12 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-none lg:shadow-lg bg-white/0 lg:bg-white/10 lg:backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
          <div className="flex gap-4 flex-row text-md text-[#BBBCBC]">
            <span>Главная</span>
            <svg className="my-auto" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66944 3.87394L0.244156 1.44866C0.0813853 1.28589 0 1.08514 0 0.846407C0 0.607677 0.0813853 0.406926 0.244156 0.244156C0.406926 0.0813853 0.607677 0 0.846407 0C1.08514 0 1.28589 0.0813853 1.44866 0.244156L4.47619 3.27169C4.563 3.3585 4.6254 3.45074 4.66338 3.5484C4.70136 3.64606 4.72035 3.75457 4.72035 3.87394C4.72035 3.9933 4.70136 4.10182 4.66338 4.19948C4.6254 4.29714 4.563 4.38938 4.47619 4.47619L1.44866 7.50372C1.28589 7.66649 1.08514 7.74788 0.846407 7.74788C0.607677 7.74788 0.406926 7.66649 0.244156 7.50372C0.0813853 7.34095 0 7.1402 0 6.90147C0 6.66274 0.0813853 6.46199 0.244156 6.29922L2.66944 3.87394Z" fill="#BBBCBC"/>
</svg>

            <span className="">Личный кабинет</span>
          </div>

          <h2 className="flex flex-wrap text-[#0039AE] text-2xl lg:text-5xl font-semibold mb-2"><span>Личный кабинет</span> <span className="text-[#BBBCBC] mx-2">-</span> <span className="text-[#BBBCBC]">Сертификаты</span></h2>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* col-1 menu */}
            <div className="flex xl:w-1/3 flex-col border-2 border-[#0039AE] px-4 py-4 rounded-xl w-full gap-4">
              {/* line 1 */}
              <div className="flex flex-row gap-2 bg-gradient-to-b from-[#013AAF] to-[#0056C5] text-white p-3 rounded-xl">
                <div className="bg-white my-auto text-[#0039AE] w-9 h-9 rounded-lg flex justify-center items-center font-bold">И
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-lg leading-5">Иван Иванов</div>
                  <div className="text-xs opacity-50">+7 (913) 749 81 95</div>
                </div>
                <div className="my-auto ml-auto"><span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-white rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4"></span>
                </div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-gradient-to-b from-[#013AAF] to-[#0056C5] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.21979 16.6053C8.95377 16.6053 8.69772 16.5587 8.45165 16.4656C8.20557 16.3725 7.98278 16.2328 7.78326 16.0466L6.1073 14.5103C4.76388 13.2733 3.51023 12.003 2.34637 10.6995C1.18252 9.39599 0.600586 7.90625 0.600586 6.23029C0.600586 4.82036 1.07943 3.6432 2.03712 2.69881C2.99481 1.75442 4.17862 1.28223 5.58855 1.28223C6.37333 1.28223 7.07829 1.44184 7.70345 1.76107C8.32861 2.0803 8.83406 2.41283 9.21979 2.75866C9.60553 2.41283 10.111 2.0803 10.7361 1.76107C11.3613 1.44184 12.0663 1.28223 12.851 1.28223C14.261 1.28223 15.4448 1.75442 16.4025 2.69881C17.3602 3.6432 17.839 4.82036 17.839 6.23029C17.839 7.90625 17.2571 9.39599 16.0932 10.6995C14.9294 12.003 13.6824 13.2666 12.3522 14.4904L10.6563 16.0466C10.4568 16.2328 10.234 16.3725 9.98794 16.4656C9.74187 16.5587 9.48582 16.6053 9.21979 16.6053Z" fill="white"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Мои курсы</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.61921 15.323C8.35318 15.323 8.09713 15.2765 7.85106 15.1834C7.60499 15.0903 7.38219 14.9506 7.18267 14.7644L5.50672 13.2281C4.16329 11.9911 2.90965 10.7208 1.74579 9.41728C0.58193 8.11376 0 6.62402 0 4.94806C0 3.53813 0.478845 2.36097 1.43653 1.41658C2.39422 0.472194 3.57804 0 4.98797 0C5.77274 0 6.47771 0.159615 7.10287 0.478845C7.72802 0.798075 8.23347 1.13061 8.61921 1.47644C9.00494 1.13061 9.51039 0.798075 10.1356 0.478845C10.7607 0.159615 11.4657 0 12.2504 0C13.6604 0 14.8442 0.472194 15.8019 1.41658C16.7596 2.36097 17.2384 3.53813 17.2384 4.94806C17.2384 6.62402 16.6565 8.11376 15.4926 9.41728C14.3288 10.7208 13.0818 11.9844 11.7517 13.2081L10.0557 14.7644C9.85622 14.9506 9.63343 15.0903 9.38735 15.1834C9.14128 15.2765 8.88523 15.323 8.61921 15.323Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Мои вебинары</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.03342 0.00430379L9.21125 0V2.14329C9.21125 4.20911 9.21532 4.28658 9.29669 4.47594C9.34145 4.58354 9.4513 4.75569 9.54081 4.85898C9.62625 4.96227 9.79306 5.09569 10.1063 5.27215L14.2156 5.31518L14.2278 10.6734C14.2359 14.1896 14.2237 16.1478 14.1953 16.3673C14.1749 16.5481 14.1098 16.7891 14.0569 16.901C14.004 17.0172 13.882 17.185 13.7843 17.2754C13.6867 17.3701 13.5077 17.4906 13.1781 17.6455H1.05376L0.838127 17.5466C0.724206 17.4906 0.545189 17.3701 0.447543 17.2754C0.349897 17.185 0.22784 17.0172 0.174949 16.901C0.122057 16.7891 0.0610286 16.5782 0.0366172 16.4276C0.0122057 16.2597 0 14.2585 0 11.0823C0.00406858 8.2891 0.0162743 4.87189 0.0569601 0.968353L0.166812 0.753164C0.223772 0.632658 0.345829 0.46481 0.431269 0.378734C0.516709 0.292658 0.687589 0.172152 0.809646 0.111899L1.03342 0.00430379ZM3.29148 4.55772C3.20604 4.6481 3.17349 4.72987 3.17349 4.85037C3.16942 4.94075 3.19383 5.05265 3.22231 5.09999C3.25486 5.14734 3.33216 5.21189 3.39726 5.24202C3.48677 5.28506 3.96686 5.29366 5.52106 5.28506L7.53093 5.27215C7.69774 5.06987 7.72622 4.98379 7.72622 4.86329C7.72622 4.72987 7.69774 4.66101 7.60417 4.56202L7.48211 4.43291H3.4054L3.29148 4.55772ZM3.24265 7.24328C3.20604 7.29493 3.17349 7.40252 3.16942 7.4886C3.16942 7.57467 3.20197 7.68657 3.25079 7.75543C3.29961 7.82429 3.40133 7.89316 3.48677 7.91898C3.58035 7.9448 4.93925 7.96202 7.11594 7.96202C9.29263 7.96202 10.6515 7.9448 10.7492 7.91898C10.8346 7.89316 10.9363 7.82429 10.9852 7.75543C11.034 7.68657 11.0665 7.57467 11.0665 7.4886C11.0625 7.40252 11.0299 7.29493 10.9933 7.24328C10.9526 7.19594 10.8794 7.13138 10.8305 7.10556C10.7655 7.07113 9.70355 7.05822 7.1078 7.05822C4.5446 7.05822 3.45422 7.07544 3.39319 7.10556C3.34844 7.13138 3.28334 7.19594 3.24265 7.24328ZM3.25079 9.88581C3.20197 9.95467 3.16942 10.0709 3.16942 10.1569C3.17349 10.2387 3.20604 10.3463 3.24265 10.398C3.28334 10.4496 3.35657 10.5099 3.4054 10.54C3.47049 10.5701 4.53239 10.5873 7.11594 10.5873C9.70355 10.5873 10.7655 10.5701 10.8305 10.54C10.8794 10.5099 10.9526 10.4496 10.9933 10.398C11.0299 10.3463 11.0625 10.2387 11.0665 10.1569C11.0665 10.0666 11.034 9.95467 10.9852 9.88581C10.9363 9.82125 10.8346 9.74809 10.7492 9.72657C10.6515 9.69644 9.30076 9.68353 7.0956 9.68784C5.09792 9.68784 3.53966 9.70505 3.46643 9.73088C3.38912 9.75239 3.29555 9.82125 3.25079 9.88581ZM3.21011 12.5671C3.18976 12.6144 3.16942 12.7177 3.16942 12.8038C3.16942 12.9114 3.20604 12.9888 3.29148 13.0835L3.41353 13.2126H10.8265C11.0299 12.9888 11.0625 12.9114 11.0625 12.8038C11.0625 12.7177 11.0462 12.6144 11.0218 12.5671C11.0014 12.5197 10.9282 12.4509 10.859 12.4164C10.7532 12.3605 10.2569 12.3519 7.1078 12.3519C4.00348 12.3519 3.45829 12.3648 3.36471 12.4164C3.30368 12.4509 3.23452 12.5197 3.21011 12.5671ZM10.0453 0.279747L11.9779 2.32405C13.0398 3.44734 13.8983 4.38126 13.882 4.39848C13.8657 4.41569 13.0479 4.4286 10.2854 4.41139L10.0453 4.13164V0.279747Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Сертификаты</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.97096 17.2783C6.62513 17.2783 6.3192 17.1619 6.05318 16.9292C5.78715 16.6964 5.62754 16.4071 5.57433 16.0613L5.37481 14.5848C5.2817 14.5316 5.18194 14.4751 5.07553 14.4152C4.96912 14.3554 4.86936 14.2922 4.77626 14.2257L3.35967 14.8043C3.02714 14.9506 2.69461 14.9639 2.36208 14.8442C2.02955 14.7245 1.77682 14.5117 1.60391 14.2057L0.187326 11.6519C0.0144097 11.346 -0.0387953 11.0267 0.0277109 10.6942C0.0942172 10.3617 0.267133 10.089 0.54646 9.87617L1.70367 8.97834V8.26007L0.566411 7.40214C0.287085 7.18932 0.114169 6.91332 0.0476628 6.57414C-0.0188434 6.23496 0.0343616 5.9124 0.207278 5.60647L1.62386 3.11249C1.79678 2.80656 2.04618 2.59707 2.37206 2.48401C2.69794 2.37095 3.02714 2.38092 3.35967 2.51394L4.69645 3.05264C4.80286 2.98613 4.91924 2.91962 5.04561 2.85312C5.17197 2.78661 5.28835 2.7201 5.39476 2.6536L5.57433 1.21706C5.61423 0.871231 5.77052 0.581929 6.0432 0.349158C6.31588 0.116386 6.62513 0 6.97096 0H9.80413C10.15 0 10.4592 0.116386 10.7319 0.349158C11.0046 0.581929 11.1609 0.871231 11.2008 1.21706L11.3803 2.67355C11.4867 2.74006 11.6031 2.80656 11.7295 2.87307C11.8558 2.93957 11.9722 3.00608 12.0786 3.07259L13.3955 2.51394C13.728 2.36762 14.0572 2.35432 14.3831 2.47403C14.709 2.59374 14.965 2.80656 15.1512 3.11249L16.5678 5.60647C16.7407 5.9124 16.7939 6.23496 16.7274 6.57414C16.6609 6.91332 16.488 7.18932 16.2087 7.40214L15.0315 8.29998V9.01824L16.1688 9.87617C16.4481 10.089 16.6243 10.365 16.6975 10.7042C16.7707 11.0434 16.7208 11.3659 16.5479 11.6718L15.1313 14.2057C14.9584 14.5117 14.7023 14.7245 14.3631 14.8442C14.0239 14.9639 13.6881 14.9506 13.3556 14.8043L11.9789 14.2257C11.8858 14.2789 11.7893 14.3354 11.6896 14.3953C11.5898 14.4551 11.4934 14.5117 11.4003 14.5649L11.2008 16.0613C11.1476 16.4071 10.9879 16.6964 10.7219 16.9292C10.4559 17.1619 10.15 17.2783 9.80413 17.2783H6.97096ZM8.36759 11.9711C9.29868 11.9711 10.0901 11.6452 10.7419 10.9935C11.3936 10.3417 11.7195 9.55029 11.7195 8.61921C11.7195 7.68812 11.3936 6.8967 10.7419 6.24493C10.0901 5.59317 9.29868 5.26729 8.36759 5.26729C7.4365 5.26729 6.64508 5.59317 5.99332 6.24493C5.34156 6.8967 5.01568 7.68812 5.01568 8.61921C5.01568 9.55029 5.34156 10.3417 5.99332 10.9935C6.64508 11.6452 7.4365 11.9711 8.36759 11.9711Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Настройки профиля</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.1149 15.6423C1.52964 15.6423 1.03085 15.4361 0.618508 15.0238C0.206169 14.6114 0 14.1126 0 13.5274V2.1149C0 1.52964 0.206169 1.03085 0.618508 0.618508C1.03085 0.206169 1.52964 0 2.1149 0H6.76368C7.05631 0 7.30571 0.103085 7.51188 0.309254C7.71805 0.515423 7.82113 0.764822 7.82113 1.05745C7.82113 1.35008 7.71805 1.59948 7.51188 1.80564C7.30571 2.01181 7.05631 2.1149 6.76368 2.1149H2.1149V13.5274H6.76368C7.05631 13.5274 7.30571 13.6305 7.51188 13.8366C7.71805 14.0428 7.82113 14.2922 7.82113 14.5848C7.82113 14.8774 7.71805 15.1268 7.51188 15.333C7.30571 15.5392 7.05631 15.6423 6.76368 15.6423H2.1149ZM11.5322 8.85863H6.36465C6.07202 8.85863 5.82262 8.75555 5.61645 8.54938C5.41028 8.34321 5.3072 8.09381 5.3072 7.80118C5.3072 7.50855 5.41028 7.25916 5.61645 7.05299C5.82262 6.84682 6.07202 6.74373 6.36465 6.74373H11.5322L10.0956 5.3072C9.88283 5.09438 9.77642 4.84165 9.77642 4.54903C9.77642 4.2564 9.88283 4.00368 10.0956 3.79086C10.3085 3.57804 10.5612 3.47163 10.8538 3.47163C11.1464 3.47163 11.3992 3.57804 11.612 3.79086L14.904 7.08291C15.1169 7.29573 15.2233 7.54181 15.2233 7.82113C15.2233 8.10046 15.1169 8.34653 14.904 8.55935L11.6319 11.8315C11.4191 12.0443 11.1631 12.1507 10.8638 12.1507C10.5645 12.1507 10.3085 12.0376 10.0956 11.8115C9.88283 11.5987 9.77642 11.346 9.77642 11.0533C9.77642 10.7607 9.88283 10.508 10.0956 10.2952L11.5322 8.85863Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Выйти</div>
              </div>


            </div>

            {/* col-2-3 */}
            <div className="flex flex-col xl:w-2/3 gap-4">
                {/* ev-1 */}
                <div className="flex flex-row gap-2 bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white p-3 rounded-md w-full">
                  <div className="bg-white my-auto text-[#0039AE] w-9 h-9 rounded-lg flex justify-center items-center font-bold text-xs">JPEG
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-lg xl:text-2xl leading-7">«ДИАСТЕМЫ. Закрытие диастем и трем» 29.03.2026</div>
                    <div className="text-sm opacity-80">JPEG · 4.2 МБ</div>
                  </div>
                  <div className="my-auto ml-auto">
                    <div className="bg-white my-auto text-[#0039AE] px-3 py-1 rounded-sm flex justify-center items-center font-bold text-sm">Скачать
                    </div>
                  </div>
                </div>
                {/* ev-2 */}
                <div className="flex flex-row gap-2 bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white p-3 rounded-md w-full">
                  <div className="bg-white my-auto text-[#0039AE] w-9 h-9 rounded-lg flex justify-center items-center font-bold text-xs">JPEG
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-lg xl:text-2xl leading-7">«ДИАСТЕМЫ. Закрытие диастем и трем» 29.03.2026</div>
                    <div className="text-sm opacity-80">JPEG · 4.2 МБ</div>
                  </div>
                  <div className="my-auto ml-auto">
                    <div className="bg-white my-auto text-[#0039AE] px-3 py-1 rounded-sm flex justify-center items-center font-bold text-sm">Скачать
                    </div>
                  </div>
                </div>

            </div>
          </div>          
        </div>
        {/* end lk */}

 
        {/* lk-2 */}
        <div className="flex flex-col w-full p-0 lg:p-6 lg:py-12 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-none lg:shadow-lg bg-white/0 lg:bg-white/10 lg:backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
          <div className="flex gap-4 flex-row text-md text-[#BBBCBC]">
            <span>Главная</span>
            <svg className="my-auto" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66944 3.87394L0.244156 1.44866C0.0813853 1.28589 0 1.08514 0 0.846407C0 0.607677 0.0813853 0.406926 0.244156 0.244156C0.406926 0.0813853 0.607677 0 0.846407 0C1.08514 0 1.28589 0.0813853 1.44866 0.244156L4.47619 3.27169C4.563 3.3585 4.6254 3.45074 4.66338 3.5484C4.70136 3.64606 4.72035 3.75457 4.72035 3.87394C4.72035 3.9933 4.70136 4.10182 4.66338 4.19948C4.6254 4.29714 4.563 4.38938 4.47619 4.47619L1.44866 7.50372C1.28589 7.66649 1.08514 7.74788 0.846407 7.74788C0.607677 7.74788 0.406926 7.66649 0.244156 7.50372C0.0813853 7.34095 0 7.1402 0 6.90147C0 6.66274 0.0813853 6.46199 0.244156 6.29922L2.66944 3.87394Z" fill="#BBBCBC"/>
</svg>

            <span className="">Личный кабинет</span>
          </div>

          <h2 className=" text-[#0039AE] text-2xl lg:text-5xl flex flex-wrap font-semibold mb-2"><span>Личный кабинет</span> <span className="text-[#BBBCBC] mx-2">-</span> <span className="text-[#BBBCBC]">Настройка профиля</span></h2>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* col-1 menu */}
            <div className="flex xl:w-1/3 flex-col border-2 border-[#0039AE] px-4 py-4 rounded-xl w-full gap-4">
              {/* line 1 */}
              <div className="flex flex-row gap-2 bg-gradient-to-b from-[#013AAF] to-[#0056C5] text-white p-3 rounded-xl">
                <div className="bg-white my-auto text-[#0039AE] w-9 h-9 rounded-lg flex justify-center items-center font-bold">И
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-lg leading-5">Иван Иванов</div>
                  <div className="text-xs opacity-50">+7 (913) 749 81 95</div>
                </div>
                <div className="my-auto ml-auto"><span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-white rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4"></span>
                </div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.61921 15.323C8.35318 15.323 8.09713 15.2765 7.85106 15.1834C7.60499 15.0903 7.38219 14.9506 7.18267 14.7644L5.50672 13.2281C4.16329 11.9911 2.90965 10.7208 1.74579 9.41728C0.58193 8.11376 0 6.62402 0 4.94806C0 3.53813 0.478845 2.36097 1.43653 1.41658C2.39422 0.472194 3.57804 0 4.98797 0C5.77274 0 6.47771 0.159615 7.10287 0.478845C7.72802 0.798075 8.23347 1.13061 8.61921 1.47644C9.00494 1.13061 9.51039 0.798075 10.1356 0.478845C10.7607 0.159615 11.4657 0 12.2504 0C13.6604 0 14.8442 0.472194 15.8019 1.41658C16.7596 2.36097 17.2384 3.53813 17.2384 4.94806C17.2384 6.62402 16.6565 8.11376 15.4926 9.41728C14.3288 10.7208 13.0818 11.9844 11.7517 13.2081L10.0557 14.7644C9.85622 14.9506 9.63343 15.0903 9.38735 15.1834C9.14128 15.2765 8.88523 15.323 8.61921 15.323Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Мои курсы</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.61921 15.323C8.35318 15.323 8.09713 15.2765 7.85106 15.1834C7.60499 15.0903 7.38219 14.9506 7.18267 14.7644L5.50672 13.2281C4.16329 11.9911 2.90965 10.7208 1.74579 9.41728C0.58193 8.11376 0 6.62402 0 4.94806C0 3.53813 0.478845 2.36097 1.43653 1.41658C2.39422 0.472194 3.57804 0 4.98797 0C5.77274 0 6.47771 0.159615 7.10287 0.478845C7.72802 0.798075 8.23347 1.13061 8.61921 1.47644C9.00494 1.13061 9.51039 0.798075 10.1356 0.478845C10.7607 0.159615 11.4657 0 12.2504 0C13.6604 0 14.8442 0.472194 15.8019 1.41658C16.7596 2.36097 17.2384 3.53813 17.2384 4.94806C17.2384 6.62402 16.6565 8.11376 15.4926 9.41728C14.3288 10.7208 13.0818 11.9844 11.7517 13.2081L10.0557 14.7644C9.85622 14.9506 9.63343 15.0903 9.38735 15.1834C9.14128 15.2765 8.88523 15.323 8.61921 15.323Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Мои вебинары</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.03342 0.00430379L9.21125 0V2.14329C9.21125 4.20911 9.21532 4.28658 9.29669 4.47594C9.34145 4.58354 9.4513 4.75569 9.54081 4.85898C9.62625 4.96227 9.79306 5.09569 10.1063 5.27215L14.2156 5.31518L14.2278 10.6734C14.2359 14.1896 14.2237 16.1478 14.1953 16.3673C14.1749 16.5481 14.1098 16.7891 14.0569 16.901C14.004 17.0172 13.882 17.185 13.7843 17.2754C13.6867 17.3701 13.5077 17.4906 13.1781 17.6455H1.05376L0.838127 17.5466C0.724206 17.4906 0.545189 17.3701 0.447543 17.2754C0.349897 17.185 0.22784 17.0172 0.174949 16.901C0.122057 16.7891 0.0610286 16.5782 0.0366172 16.4276C0.0122057 16.2597 0 14.2585 0 11.0823C0.00406858 8.2891 0.0162743 4.87189 0.0569601 0.968353L0.166812 0.753164C0.223772 0.632658 0.345829 0.46481 0.431269 0.378734C0.516709 0.292658 0.687589 0.172152 0.809646 0.111899L1.03342 0.00430379ZM3.29148 4.55772C3.20604 4.6481 3.17349 4.72987 3.17349 4.85037C3.16942 4.94075 3.19383 5.05265 3.22231 5.09999C3.25486 5.14734 3.33216 5.21189 3.39726 5.24202C3.48677 5.28506 3.96686 5.29366 5.52106 5.28506L7.53093 5.27215C7.69774 5.06987 7.72622 4.98379 7.72622 4.86329C7.72622 4.72987 7.69774 4.66101 7.60417 4.56202L7.48211 4.43291H3.4054L3.29148 4.55772ZM3.24265 7.24328C3.20604 7.29493 3.17349 7.40252 3.16942 7.4886C3.16942 7.57467 3.20197 7.68657 3.25079 7.75543C3.29961 7.82429 3.40133 7.89316 3.48677 7.91898C3.58035 7.9448 4.93925 7.96202 7.11594 7.96202C9.29263 7.96202 10.6515 7.9448 10.7492 7.91898C10.8346 7.89316 10.9363 7.82429 10.9852 7.75543C11.034 7.68657 11.0665 7.57467 11.0665 7.4886C11.0625 7.40252 11.0299 7.29493 10.9933 7.24328C10.9526 7.19594 10.8794 7.13138 10.8305 7.10556C10.7655 7.07113 9.70355 7.05822 7.1078 7.05822C4.5446 7.05822 3.45422 7.07544 3.39319 7.10556C3.34844 7.13138 3.28334 7.19594 3.24265 7.24328ZM3.25079 9.88581C3.20197 9.95467 3.16942 10.0709 3.16942 10.1569C3.17349 10.2387 3.20604 10.3463 3.24265 10.398C3.28334 10.4496 3.35657 10.5099 3.4054 10.54C3.47049 10.5701 4.53239 10.5873 7.11594 10.5873C9.70355 10.5873 10.7655 10.5701 10.8305 10.54C10.8794 10.5099 10.9526 10.4496 10.9933 10.398C11.0299 10.3463 11.0625 10.2387 11.0665 10.1569C11.0665 10.0666 11.034 9.95467 10.9852 9.88581C10.9363 9.82125 10.8346 9.74809 10.7492 9.72657C10.6515 9.69644 9.30076 9.68353 7.0956 9.68784C5.09792 9.68784 3.53966 9.70505 3.46643 9.73088C3.38912 9.75239 3.29555 9.82125 3.25079 9.88581ZM3.21011 12.5671C3.18976 12.6144 3.16942 12.7177 3.16942 12.8038C3.16942 12.9114 3.20604 12.9888 3.29148 13.0835L3.41353 13.2126H10.8265C11.0299 12.9888 11.0625 12.9114 11.0625 12.8038C11.0625 12.7177 11.0462 12.6144 11.0218 12.5671C11.0014 12.5197 10.9282 12.4509 10.859 12.4164C10.7532 12.3605 10.2569 12.3519 7.1078 12.3519C4.00348 12.3519 3.45829 12.3648 3.36471 12.4164C3.30368 12.4509 3.23452 12.5197 3.21011 12.5671ZM10.0453 0.279747L11.9779 2.32405C13.0398 3.44734 13.8983 4.38126 13.882 4.39848C13.8657 4.41569 13.0479 4.4286 10.2854 4.41139L10.0453 4.13164V0.279747Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Сертификаты</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-gradient-to-b from-[#013AAF] to-[#0056C5]  my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.97096 17.2783C6.62513 17.2783 6.3192 17.1619 6.05318 16.9292C5.78715 16.6964 5.62754 16.4071 5.57433 16.0613L5.37481 14.5848C5.2817 14.5316 5.18194 14.4751 5.07553 14.4152C4.96912 14.3554 4.86936 14.2922 4.77626 14.2257L3.35967 14.8043C3.02714 14.9506 2.69461 14.9639 2.36208 14.8442C2.02955 14.7245 1.77682 14.5117 1.60391 14.2057L0.187326 11.6519C0.0144097 11.346 -0.0387953 11.0267 0.0277109 10.6942C0.0942172 10.3617 0.267133 10.089 0.54646 9.87617L1.70367 8.97834V8.26007L0.566411 7.40214C0.287085 7.18932 0.114169 6.91332 0.0476628 6.57414C-0.0188434 6.23496 0.0343616 5.9124 0.207278 5.60647L1.62386 3.11249C1.79678 2.80656 2.04618 2.59707 2.37206 2.48401C2.69794 2.37095 3.02714 2.38092 3.35967 2.51394L4.69645 3.05264C4.80286 2.98613 4.91924 2.91962 5.04561 2.85312C5.17197 2.78661 5.28835 2.7201 5.39476 2.6536L5.57433 1.21706C5.61423 0.871231 5.77052 0.581929 6.0432 0.349158C6.31588 0.116386 6.62513 0 6.97096 0H9.80413C10.15 0 10.4592 0.116386 10.7319 0.349158C11.0046 0.581929 11.1609 0.871231 11.2008 1.21706L11.3803 2.67355C11.4867 2.74006 11.6031 2.80656 11.7295 2.87307C11.8558 2.93957 11.9722 3.00608 12.0786 3.07259L13.3955 2.51394C13.728 2.36762 14.0572 2.35432 14.3831 2.47403C14.709 2.59374 14.965 2.80656 15.1512 3.11249L16.5678 5.60647C16.7407 5.9124 16.7939 6.23496 16.7274 6.57414C16.6609 6.91332 16.488 7.18932 16.2087 7.40214L15.0315 8.29998V9.01824L16.1688 9.87617C16.4481 10.089 16.6243 10.365 16.6975 10.7042C16.7707 11.0434 16.7208 11.3659 16.5479 11.6718L15.1313 14.2057C14.9584 14.5117 14.7023 14.7245 14.3631 14.8442C14.0239 14.9639 13.6881 14.9506 13.3556 14.8043L11.9789 14.2257C11.8858 14.2789 11.7893 14.3354 11.6896 14.3953C11.5898 14.4551 11.4934 14.5117 11.4003 14.5649L11.2008 16.0613C11.1476 16.4071 10.9879 16.6964 10.7219 16.9292C10.4559 17.1619 10.15 17.2783 9.80413 17.2783H6.97096ZM8.36759 11.9711C9.29868 11.9711 10.0901 11.6452 10.7419 10.9935C11.3936 10.3417 11.7195 9.55029 11.7195 8.61921C11.7195 7.68812 11.3936 6.8967 10.7419 6.24493C10.0901 5.59317 9.29868 5.26729 8.36759 5.26729C7.4365 5.26729 6.64508 5.59317 5.99332 6.24493C5.34156 6.8967 5.01568 7.68812 5.01568 8.61921C5.01568 9.55029 5.34156 10.3417 5.99332 10.9935C6.64508 11.6452 7.4365 11.9711 8.36759 11.9711Z" fill="white"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Настройки профиля</div>
              </div>

              {/* line .. */}
              <div className="flex flex-row gap-2 ">
                <div className="bg-[#F0F4F6] my-auto w-8 h-8 rounded-lg flex justify-center items-center ">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.1149 15.6423C1.52964 15.6423 1.03085 15.4361 0.618508 15.0238C0.206169 14.6114 0 14.1126 0 13.5274V2.1149C0 1.52964 0.206169 1.03085 0.618508 0.618508C1.03085 0.206169 1.52964 0 2.1149 0H6.76368C7.05631 0 7.30571 0.103085 7.51188 0.309254C7.71805 0.515423 7.82113 0.764822 7.82113 1.05745C7.82113 1.35008 7.71805 1.59948 7.51188 1.80564C7.30571 2.01181 7.05631 2.1149 6.76368 2.1149H2.1149V13.5274H6.76368C7.05631 13.5274 7.30571 13.6305 7.51188 13.8366C7.71805 14.0428 7.82113 14.2922 7.82113 14.5848C7.82113 14.8774 7.71805 15.1268 7.51188 15.333C7.30571 15.5392 7.05631 15.6423 6.76368 15.6423H2.1149ZM11.5322 8.85863H6.36465C6.07202 8.85863 5.82262 8.75555 5.61645 8.54938C5.41028 8.34321 5.3072 8.09381 5.3072 7.80118C5.3072 7.50855 5.41028 7.25916 5.61645 7.05299C5.82262 6.84682 6.07202 6.74373 6.36465 6.74373H11.5322L10.0956 5.3072C9.88283 5.09438 9.77642 4.84165 9.77642 4.54903C9.77642 4.2564 9.88283 4.00368 10.0956 3.79086C10.3085 3.57804 10.5612 3.47163 10.8538 3.47163C11.1464 3.47163 11.3992 3.57804 11.612 3.79086L14.904 7.08291C15.1169 7.29573 15.2233 7.54181 15.2233 7.82113C15.2233 8.10046 15.1169 8.34653 14.904 8.55935L11.6319 11.8315C11.4191 12.0443 11.1631 12.1507 10.8638 12.1507C10.5645 12.1507 10.3085 12.0376 10.0956 11.8115C9.88283 11.5987 9.77642 11.346 9.77642 11.0533C9.77642 10.7607 9.88283 10.508 10.0956 10.2952L11.5322 8.85863Z" fill="#0039AE"/>
</svg>
                </div>
                <div className="font-bold text-lg my-auto">Выйти</div>
              </div>

            </div>

            {/* col-2-3 */}
            <div className="flex flex-col xl:w-2/3 gap-8">
                <div className="flex mx-auto lg:mx-0 w-48 lg:w-auto text-center lg:text-left text-xl  font-bold">Личная информация</div>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="max-w-48 w-full flex justify-center  mx-auto">
                    <div className=" rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{backgroundImage:`url(prof-photo.jpg)`}}></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <input className="rounded-xl bg-[#EFEFEF] px-4 py-3 text-md font-semibold text-[#0039AE] placeholder:text-[#0039AE]" placeholder="Иван" name="" />
                    <input className="rounded-xl bg-[#EFEFEF] px-4 py-3 text-md font-semibold text-[#0039AE] placeholder:text-[#0039AE]" placeholder="Иванов" name="" />
                    <input className="rounded-xl bg-[#EFEFEF] px-4 py-3 text-md font-semibold text-[#0039AE] placeholder:text-[#0039AE]" placeholder="Иванович" name="" />
                    <input className="rounded-xl bg-[#EFEFEF] px-4 py-3 text-md font-semibold text-[#0039AE] placeholder:text-[#0039AE]" placeholder="example@mail.com" name="" />
                    <input className="rounded-xl bg-[#EFEFEF] px-4 py-3 text-md font-semibold text-[#0039AE] placeholder:text-[#0039AE]" placeholder="+71234567890" name="" />
                    {/* gender */}
                    <div className="relative">
                      <select
                        name="gender"
                        className="w-full appearance-none rounded-xl bg-[#EFEFEF] px-4 py-3 pr-10 text-md font-semibold text-[#1924248F]"
                        defaultValue=""
                      >
                        <option value="" disabled>Пол</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 block w-2 h-2 border-r-2 border-b-2 border-blue-800 rotate-45"></span>
                    </div>
                    {/* spec */}
                    <div className="relative">
                      <select
                        name="spec"
                        className="w-full appearance-none rounded-xl bg-[#EFEFEF] px-4 py-3 pr-10 text-md font-semibold text-[#1924248F]"
                        defaultValue=""
                      >
                        <option value="" disabled>Специализация</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 block w-2 h-2 border-r-2 border-b-2 border-blue-800 rotate-45"></span>
                    </div>
                    {/* city */}
                    <div className="relative">
                      <select
                        name="city"
                        className="w-full appearance-none rounded-xl bg-[#EFEFEF] px-4 py-3 pr-10 text-md font-semibold text-[#1924248F]"
                        defaultValue=""
                      >
                        <option value="" disabled>Город/страна</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 block w-2 h-2 border-r-2 border-b-2 border-blue-800 rotate-45"></span>
                    </div>
                    {/* bday */}
                    <div className="relative">
                      <input
                        type="date"
                        name="bday"
                        className="w-full appearance-none rounded-xl bg-[#EFEFEF] px-4 py-3 pr-10 text-md font-semibold text-[#1924248F] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
                      />
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 block">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.95149 15.8329C1.41477 15.8329 0.955371 15.6418 0.573297 15.2596C0.191099 14.8774 0 14.418 0 13.8814V3.35067C0 2.81407 0.191099 2.35468 0.573297 1.97248C0.955371 1.59028 1.41477 1.39918 1.95149 1.39918H2.09877V0.975746C2.09877 0.705728 2.19389 0.475599 2.38413 0.28536C2.57437 0.0951199 2.8045 0 3.07452 0C3.34454 0 3.57467 0.0951199 3.7649 0.28536C3.95514 0.475599 4.05026 0.705728 4.05026 0.975746V1.39918H10.3834V0.975746C10.3834 0.705728 10.4785 0.475599 10.6688 0.28536C10.859 0.0951199 11.0891 0 11.3592 0C11.6292 0 11.8593 0.0951199 12.0495 0.28536C12.2398 0.475599 12.3349 0.705728 12.3349 0.975746V1.39918H12.4822C13.0188 1.39918 13.4782 1.59028 13.8604 1.97248C14.2426 2.35468 14.4337 2.81407 14.4337 3.35067V13.8814C14.4337 14.418 14.2426 14.8774 13.8604 15.2596C13.4782 15.6418 13.0188 15.8329 12.4822 15.8329H1.95149ZM1.95149 13.8814H12.4822V6.0754H1.95149V13.8814ZM7.21684 9.49971C6.98364 9.49971 6.78419 9.41687 6.6185 9.25117C6.45281 9.08548 6.36996 8.88604 6.36996 8.65284C6.36996 8.41964 6.45281 8.2202 6.6185 8.0545C6.78419 7.88881 6.98364 7.80597 7.21684 7.80597C7.45003 7.80597 7.64948 7.88881 7.81517 8.0545C7.98086 8.2202 8.06371 8.41964 8.06371 8.65284C8.06371 8.88604 7.98086 9.08548 7.81517 9.25117C7.64948 9.41687 7.45003 9.49971 7.21684 9.49971ZM4.27119 9.49971C4.03799 9.49971 3.83855 9.41687 3.67285 9.25117C3.50716 9.08548 3.42431 8.88604 3.42431 8.65284C3.42431 8.41964 3.50716 8.2202 3.67285 8.0545C3.83855 7.88881 4.03799 7.80597 4.27119 7.80597C4.50438 7.80597 4.70383 7.88881 4.86952 8.0545C5.03522 8.2202 5.11806 8.41964 5.11806 8.65284C5.11806 8.88604 5.03522 9.08548 4.86952 9.25117C4.70383 9.41687 4.50438 9.49971 4.27119 9.49971ZM10.1625 9.49971C9.92929 9.49971 9.72984 9.41687 9.56415 9.25117C9.39845 9.08548 9.31561 8.88604 9.31561 8.65284C9.31561 8.41964 9.39845 8.2202 9.56415 8.0545C9.72984 7.88881 9.92929 7.80597 10.1625 7.80597C10.3957 7.80597 10.5951 7.88881 10.7608 8.0545C10.9265 8.2202 11.0094 8.41964 11.0094 8.65284C11.0094 8.88604 10.9265 9.08548 10.7608 9.25117C10.5951 9.41687 10.3957 9.49971 10.1625 9.49971ZM7.21684 12.4454C6.98364 12.4454 6.78419 12.3625 6.6185 12.1968C6.45281 12.0311 6.36996 11.8317 6.36996 11.5985C6.36996 11.3653 6.45281 11.1658 6.6185 11.0002C6.78419 10.8345 6.98364 10.7516 7.21684 10.7516C7.45003 10.7516 7.64948 10.8345 7.81517 11.0002C7.98086 11.1658 8.06371 11.3653 8.06371 11.5985C8.06371 11.8317 7.98086 12.0311 7.81517 12.1968C7.64948 12.3625 7.45003 12.4454 7.21684 12.4454ZM4.27119 12.4454C4.03799 12.4454 3.83855 12.3625 3.67285 12.1968C3.50716 12.0311 3.42431 11.8317 3.42431 11.5985C3.42431 11.3653 3.50716 11.1658 3.67285 11.0002C3.83855 10.8345 4.03799 10.7516 4.27119 10.7516C4.50438 10.7516 4.70383 10.8345 4.86952 11.0002C5.03522 11.1658 5.11806 11.3653 5.11806 11.5985C5.11806 11.8317 5.03522 12.0311 4.86952 12.1968C4.70383 12.3625 4.50438 12.4454 4.27119 12.4454ZM10.1625 12.4454C9.92929 12.4454 9.72984 12.3625 9.56415 12.1968C9.39845 12.0311 9.31561 11.8317 9.31561 11.5985C9.31561 11.3653 9.39845 11.1658 9.56415 11.0002C9.72984 10.8345 9.92929 10.7516 10.1625 10.7516C10.3957 10.7516 10.5951 10.8345 10.7608 11.0002C10.9265 11.1658 11.0094 11.3653 11.0094 11.5985C11.0094 11.8317 10.9265 12.0311 10.7608 12.1968C10.5951 12.3625 10.3957 12.4454 10.1625 12.4454Z" fill="#192424" fillOpacity="0.56"/>
</svg>
                      </span>
                    </div>
                  </div>
                </div>
                {/* notifications */}
                <div className="flex lg:text-left text-xl font-bold">Уведомления</div>
                <div className="flex flex-col gap-3">
                  {/* email */}
                  <div className="flex flex-row w-full">
                    <div className="flex">Оповещение по E-mail</div>
                    <label className="relative ml-auto inline-flex h-6 w-11 cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <span className="h-6 w-11 rounded-full bg-[#D8E6FF] transition peer-checked:bg-[#0139AE]" />
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                  {/* phone */}
                  <div className="flex flex-row w-full">
                    <div className="flex">Звонки по телефону</div>
                    <label className="relative ml-auto inline-flex h-6 w-11 cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only"/>
                      <span className="h-6 w-11 rounded-full bg-[#D8E6FF] transition peer-checked:bg-[#0139AE]" />
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                  {/* sms */}
                  <div className="flex flex-row w-full">
                    <div className="flex">Сообщения по SMS</div>
                    <label className="relative ml-auto inline-flex h-6 w-11 cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <span className="h-6 w-11 rounded-full bg-[#D8E6FF] transition peer-checked:bg-[#0139AE]" />
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                  {/* wa */}
                  <div className="flex flex-row w-full">
                    <div className="flex">По WhatsApp</div>
                    <label className="relative ml-auto inline-flex h-6 w-11 cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <span className="h-6 w-11 rounded-full bg-[#D8E6FF] transition peer-checked:bg-[#0139AE]" />
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                  {/* tg */}
                  <div className="flex flex-row w-full">
                    <div className="flex">По Telegram</div>
                    <label className="relative ml-auto inline-flex h-6 w-11 cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <span className="h-6 w-11 rounded-full bg-[#D8E6FF] transition peer-checked:bg-[#0139AE]" />
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                </div>

            </div>
            {/* end col 2-3 */}
          </div>    
        </div>
        {/* end lk-2 */}





        {/* courses */}
        <div className=" flex flex-row gap-4 font-gilroy">
          <h2 className="text-[#0039AE] text-2xl w-48 lg:text-5xl lg:w-full lg:text-center font-semibold leading-6">Ближайшие курсы</h2>
          <div className="ml-auto w-24 text-right text-sm lg:hidden">фильтры</div>
        </div>

        {/* all courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* single */}
            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
            <div className="flex flex-col max-w-full aspect-[12/15] bg-cover bg-no-repeat rounded-xl" style={{backgroundImage: `url(c3.webp)`}}></div>
            <div className="flex flex-col text-center ">
              <div className="mb-2 mt-1 uppercase text-[#777777] flex flex-row
                items-center text-center mx-auto">
                  <div className="">Москва</div>
                  <div className="mx-2 flex items-center">
                    <div className="w-26 border-t-1 border-[#777777]"></div>
                    <div className="w-2 h-2 border-r-1 border-t-1 border-[#777777]
                rotate-45 -ml-2"></div>
                  </div>

                  <div>10.03.25</div>
                </div>
              <div className="uppercase font-bold text-[#777777]">ИВАН ВЬЮЧНОВ</div>

              <div className="uppercase font-bold text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
              <div className="mt-2 text-sm text-center rounded-lg py-3 w-48 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold">
                Подробнее
              </div>
            </div>
          </div>

          {/* single */}
            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg 
          shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
            <div className="flex flex-col aspect-[12/15] bg-cover bg-no-repeat rounded-xl" style={{backgroundImage: `url(c3.jpg)`}}></div>
            <div className="flex flex-col text-center ">
              <div className="mb-2 mt-1 uppercase text-[#777777] flex flex-row
                items-center text-center mx-auto">
                  <div className="">Москва</div>
                  <div className="mx-2 flex items-center">
                    <div className="w-26 border-t-1 border-[#777777]"></div>
                    <div className="w-2 h-2 border-r-1 border-t-1 border-[#777777]
                rotate-45 -ml-2"></div>
                  </div>

                  <div>10.03.25</div>
                </div>
              <div className="uppercase font-bold text-[#777777]">ИВАН ВЬЮЧНОВ</div>

              <div className="uppercase font-bold text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
              <div className="mt-2 text-sm text-center rounded-lg py-3 w-48 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold">Подробнее</div>
            </div>
          </div>
          
          {/* single */}
            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg 
          shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
            <div className="flex flex-col aspect-[12/15] bg-cover bg-no-repeat rounded-xl" style={{backgroundImage: `url(c3.jpg)`}}></div>
            <div className="flex flex-col text-center ">
              <div className="mb-2 mt-1 uppercase text-[#777777] flex flex-row
                items-center text-center mx-auto">
                  <div className="">Москва</div>
                  <div className="mx-2 flex items-center">
                    <div className="w-26 border-t-1 border-[#777777]"></div>
                    <div className="w-2 h-2 border-r-1 border-t-1 border-[#777777]
                rotate-45 -ml-2"></div>
                  </div>

                  <div>10.03.25</div>
                </div>
              <div className="uppercase font-bold text-[#777777]">ИВАН ВЬЮЧНОВ</div>

              <div className="uppercase font-bold text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
              <div className="mt-2 text-sm text-center rounded-lg py-3 w-48 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold">Подробнее</div>
            </div>
          </div>
        </div>

        {/* events */}
        <div className=" flex flex-row gap-4 font-gilroy mt-16">
          <h2 className="text-[#0039AE] text-2xl w-48 lg:text-5xl lg:w-full lg:text-center font-semibold leading-6 lg:mb-8">Все мероприятия</h2>
          <div className="ml-auto w-24 text-right text-sm lg:hidden">фильтры</div>
        </div>

      {/* events + filter */}
      <div className="flex flex-row gap-8">
       {/* all events */}
          <div className="flex w-full lg:w-17/24 p-4 lg:p-6 lg:py-12 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          
            {/* single */}
            <div className="flex flex-col">
              <div className="flex flex-col aspect-[12/15] bg-cover bg-no-repeat " style={{backgroundImage: `url(c1.webp)`}}></div>
              <div className="flex flex-col text-center text-sm">
                <div className=" mt-1 uppercase text-[#777777] flex flex-row items-center text-center mx-auto text-xs">
                    <div className="mt-1">Москва</div>
                    <div className="mx-2 flex items-center">
                      <div className="w-20 border-t-1 border-[#777777]"></div>
                      <div className="w-2 h-2 border-r-1 border-t-1 border-[#777777]
                  rotate-45 -ml-2"></div>
                    </div>
                    <div>10.03.25</div>
                  </div>
                <div className="uppercase text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
                <div className="uppercase text-[#777777] line-through">7 000₽</div>
                <div className="uppercase text-[#0039AE] text-xl font-semibold leading-5">5 000 ₽ </div>

                <div className="mt-2 text-lg text-center rounded-lg py-2 px-8 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold lg:w-full">Записаться</div>
              </div>
            </div>
            {/* single */}
            <div className="flex flex-col">
              <div className="flex flex-col aspect-[12/15] bg-cover bg-no-repeat " style={{backgroundImage: `url(c2.webp)`}}></div>
              <div className="flex flex-col text-center text-sm">
                <div className=" mt-1 uppercase text-[#777777] flex flex-row items-center text-center mx-auto text-xs">
                    <div className="mt-1">Москва</div>
                    <div className="mx-2 flex items-center">
                      <div className="w-20 border-t-1 border-[#777777]"></div>
                      <div className="w-2 h-2 border-r-1 border-t-1 border-[#777777]
                  rotate-45 -ml-2"></div>
                    </div>
                    <div>10.03.25</div>
                  </div>
                <div className="uppercase text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
                <div className="uppercase text-[#777777] line-through">7 000₽</div>
                <div className="uppercase text-[#0039AE] text-xl font-semibold leading-5">5 000 ₽ </div>

                <div className="mt-2 text-lg text-center rounded-lg py-2 px-8 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold lg:w-full">Записаться</div>
              </div>
            </div>
            {/* single */}
            <div className="flex flex-col">
              <div className="flex flex-col aspect-[12/15] bg-cover bg-no-repeat " style={{backgroundImage: `url(c1.png)`}}></div>
              <div className="flex flex-col text-center text-sm">
                <div className=" mt-1 uppercase text-[#777777] flex flex-row items-center text-center mx-auto text-xs">
                    <div className="mt-1">Москва</div>
                    <div className="mx-2 flex items-center">
                      <div className="w-20 border-t-1 border-[#777777]"></div>
                      <div className="w-2 h-2 border-r-1 border-t-1 border-[#777777]
                  rotate-45 -ml-2"></div>
                    </div>
                    <div>10.03.25</div>
                  </div>
                <div className="uppercase text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
                <div className="uppercase text-[#777777] line-through">7 000₽</div>
                <div className="uppercase text-[#0039AE] text-xl font-semibold leading-5">5 000 ₽ </div>

                <div className="mt-2 text-lg text-center rounded-lg py-2 px-8 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold lg:w-full">Записаться</div>
              </div>
            </div>
            {/* single */}
            <div className="flex flex-col">
              <div className="flex flex-col aspect-[12/15] bg-cover bg-no-repeat " style={{backgroundImage: `url(c2.png)`}}></div>
              <div className="flex flex-col text-center text-sm">
                <div className=" mt-1 uppercase text-[#777777] flex flex-row items-center text-center mx-auto text-xs">
                    <div className="mt-1">Москва</div>
                    <div className="mx-2 flex items-center">
                      <div className="w-20 border-t-1 border-[#777777]"></div>
                      <div className="w-2 h-2 border-r-1 border-t-1 border-[#777777]
                  rotate-45 -ml-2"></div>
                    </div>
                    <div>10.03.25</div>
                  </div>
                <div className="uppercase text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
                <div className="uppercase text-[#777777] line-through">7 000₽</div>
                <div className="uppercase text-[#0039AE] text-xl font-semibold leading-5">5 000 ₽ </div>

                <div className="mt-2 text-lg text-center rounded-lg py-2 px-8 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold lg:w-full">Записаться</div>
              </div>
            </div>
            
            
          </div>

          {/* event filters */}
          <form className="hidden lg:flex lg:w-7/24 self-start h-fit px-4 py-6 rounded-2xl  bg-gradient-to-b from-[#091930] to-[#0156C5] via-[#003BAF] flex flex-col font-gilroy text-white gap-4">
            <h3 className="text-2xl font-semibold">Фильтры</h3>

            {/* city */}
            <div className="flex flex-col gap-2">
              <div className="text-sm font-bold">Город</div>
              <div className="relative">
                <input className="w-full rounded-lg border-1 border-white bg-transparent p-2 pr-10 text-xs placeholder:text-white/70" placeholder="Поиск" type="text" name="city_search" id="city-search" />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1078 10.5235L9.25663 7.67208C9.74107 6.90084 10.0222 5.98928 10.0222 5.01101C10.0222 2.24334 7.77857 0 5.01101 0C2.24345 0 0 2.24334 0 5.01101C0 7.77878 2.24334 10.0219 5.01101 10.0219C6.07563 10.0219 7.06173 9.68907 7.87316 9.12351L10.6904 11.941C10.8862 12.1365 11.1428 12.2339 11.3991 12.2339C11.6557 12.2339 11.9121 12.1365 12.1081 11.941C12.4993 11.5494 12.4993 10.915 12.1078 10.5235ZM5.01101 8.39842C3.14039 8.39842 1.62381 6.88194 1.62381 5.01122C1.62381 3.14049 3.14039 1.62391 5.01101 1.62391C6.88173 1.62391 8.39821 3.14049 8.39821 5.01122C8.39821 6.88194 6.88173 8.39842 5.01101 8.39842Z" fill="white"/>
                  </svg>
                </span>
              </div>

              <label htmlFor="city-moscow" className="flex items-center gap-2 text-xs cursor-pointer select-none">
                <input type="checkbox" name="city[]" id="city-moscow" value="moscow" className="" />
                <span>Москва</span>
              </label>
            </div>

            {/* price */}
            <div className="flex flex-col gap-2">
              <div className="text-sm font-bold">Цена</div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="text-xs text-white/40 text-bold">От</div>
                  <input
                    className="w-full rounded-xl bg-white px-6 py-3 text-md font-semibold text-[#2C2C32] placeholder:text-[#2C2C32]"
                    placeholder="5 000 ₽"
                    type="text"
                    name="price_from"
                    id="price-from"
                    inputMode="numeric"
                    value={formatPrice(priceFrom)}
                    onChange={(event) => setPriceFrom(normalizePrice(event.target.value))}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="text-xs text-white/40 text-bold">До</div>
                  <input
                    className="w-full rounded-xl bg-white px-6 py-3 text-md font-semibold text-[#2C2C32] placeholder:text-[#2C2C32]"
                    placeholder="100 000 ₽"
                    type="text"
                    name="price_to"
                    id="price-to"
                    inputMode="numeric"
                    value={formatPrice(priceTo)}
                    onChange={(event) => setPriceTo(normalizePrice(event.target.value))}
                  />
                </div>
              </div>
              <div className="pt-1 px-1">
                <div ref={sliderRef} className="relative h-4">
                  <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-white/20" />
                  <div
                    className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-white"
                    style={{
                      left: `${Math.max(0, Math.min(100, fromPercent))}%`,
                      width: `${Math.max(0, Math.min(100, toPercent - fromPercent))}%`,
                    }}
                  />
                  <div
                    className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    style={{ left: `calc(${Math.max(0, Math.min(100, fromPercent))}% - 8px)` }}
                    onPointerDown={() => setDragging("from")}
                  />
                  <div
                    className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    style={{ left: `calc(${Math.max(0, Math.min(100, toPercent))}% - 8px)` }}
                    onPointerDown={() => setDragging("to")}
                  />
                </div>
              </div>
            </div>

            {/* format */}
            <div className="flex flex-col gap-2">
              <div className="text-sm font-bold">Формат</div>
              <label htmlFor="format-webinars" className="flex items-center gap-2 text-xs cursor-pointer select-none">
                <input type="checkbox" name="format[]" id="format-webinars" value="webinars" className="" />
                <span>Вебинары</span>
              </label>
              <label htmlFor="format-congresses" className="flex items-center gap-2 text-xs cursor-pointer select-none">
                <input type="checkbox" name="format[]" id="format-congresses" value="congresses" className="" />
                <span>Конгрессы</span>
              </label>
            </div>
            
            {/* cat */}
            <div className="flex flex-col gap-2">
              <div className="text-sm font-bold">Категория</div>
              <label htmlFor="category-all" className="flex items-center gap-2 text-xs cursor-pointer select-none">
                <input type="checkbox" name="category[]" id="category-all" value="all" className="" />
                <span>Все</span>
              </label>
              <label htmlFor="category-child" className="flex items-center gap-2 text-xs cursor-pointer select-none">
                <input type="checkbox" name="category[]" id="category-child" value="child" className="" />
                <span>Детская стоматология</span>
              </label>
              <label htmlFor="category-ortho" className="flex items-center gap-2 text-xs cursor-pointer select-none">
                <input type="checkbox" name="category[]" id="category-ortho" value="ortho" className="" />
                <span>Ортопедия</span>
              </label>
              <span className="text-sm">Показать все</span>
            </div>
            {/* buttons */}
            <div className="flex flex-col gap-2">
              <button type="submit" className="w-full text-center rounded-xl bg-white px-4 py-3  text-md font-semibold text-[#0039AE]">Применить</button>
              <button type="reset" className="w-full text-center rounded-xl border border-white px-4 py-3  text-md font-semibold text-white">Сбросить</button>

            </div>
              {/* end filter */}

          </form>
          {/* end  */}
        </div>


        <div className="rounded-lg py-2 px-6 mx-auto text-center bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold">Показать еще</div>

        {/* faq  */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl w-48 text-center mx-auto text-[#0039AE] lg:text-5xl lg:w-full font-semibold leading-6 lg:hidden">Популярные вопросы</h2>
          {/* single */}
          <div className="flex flex-col gap-3">
            <div className="group rounded-xl lg:rounded-3xl shadow-lg bg-gray-50 px-4 py-2 md:px-8 md:py-8">
              <input type="checkbox" id="faq-1" className="peer absolute opacity-0 pointer-events-none" />
              <label htmlFor="faq-1" className="flex flex-row  cursor-pointer items-center">
                <div className="hover:text-[#013CB0] group-has-[:checked]:text-[#013CB0] text-md leading-5 lg:text-3xl font-bold text-[#6C6C6C]  uppercase">Для кого подходит обучение в DSK School?</div>
                <span className="ml-auto block lg:w-6 lg:h-6 h-3 w-3 lg:border-r-6 lg:border-b-6 border-r-4 border-b-4 border-[#0039AE] rotate-45 transition-transform duration-300 shrink-0 group-has-[:checked]:rotate-[225deg] peer-checked:rotate-[225deg] -mt-2 "></span>
              </label>

              <div className="overflow-hidden max-h-0 transition-all
        duration-300 peer-checked:max-h-full">
                <div className="pt-4 lg:pt-8 text-md lg:text-xl font-semibold text-[#6C6C6C] text-gilroy">Под описанием каждого практического курса есть кнопка &quot;Записаться&quot;, нажмите пожалуйста на нее и выберите удобный для Вас способ связи. Пожалуйста остерегайтесь мошенников, запись на курс ведется только с контактами указанными на официальном сайте (https://www.dsk-med.ru/) или в публикациях в наших социальных сетях. Осторожно, в комментариях также нередко можно “встретить” мошенников. </div>
              </div>
            </div>
          </div>
          {/* single */}
          <div className="flex flex-col gap-3">
            <div className="group rounded-xl lg:rounded-3xl shadow-lg bg-gray-50 px-4 py-2 md:px-8 md:py-8">
              <input type="checkbox" id="faq-2" className="peer absolute opacity-0 pointer-events-none" />
              <label htmlFor="faq-2" className="flex flex-row  cursor-pointer items-center">
                <div className="hover:text-[#013CB0] group-has-[:checked]:text-[#013CB0] text-md leading-5 lg:text-3xl font-bold text-[#6C6C6C]  uppercase">Вебинар проходит в прямом эфире или в записи?</div>
                <span className="ml-auto block lg:w-6 lg:h-6 h-3 w-3 lg:border-r-6 lg:border-b-6 border-r-4 border-b-4 border-[#0039AE] rotate-45 transition-transform duration-300 shrink-0 group-has-[:checked]:rotate-[225deg] -mt-2 "></span>
              </label>

              <div className="overflow-hidden max-h-0 
        duration-300 peer-checked:max-h-full ">
                <div className="pt-4 lg:pt-8 text-md lg:text-xl font-semibold text-[#6C6C6C] text-gilroy ">Под описанием каждого практического курса есть кнопка &quot;Записаться&quot;, нажмите пожалуйста на нее и выберите удобный для Вас способ связи. Пожалуйста остерегайтесь мошенников, запись на курс ведется только с контактами указанными на официальном сайте (https://www.dsk-med.ru/) или в публикациях в наших социальных сетях. Осторожно, в комментариях также нередко можно “встретить” мошенников. </div>
              </div>
            </div>
          </div>
          
        </div>




        {/* congress */}
        <div className="flex flex-col p-8 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10  gap-10 ">
          
          {/* single */}
          <div className="flex flex-col border-blue-800 pb-8 border-b-2 pb-3 gap-4 text-[#777777]">
            <div className="flex flex-col lg:flex-row gap-4 font-bold">
              <div className="lg:hidden flex flex-row">
                <div className="text-md my-auto">23-24.05.2026</div>
                <a href="#" className="ml-auto text-md text-[#0039AE] underline my-auto">Новосибирск</a>
              </div>
              <div className="flex flex-col aspect-[1/1] h-auto bg-contain bg-no-repeat rounded-xl lg:w-96" style={{backgroundImage: `url(congress.png)`}}>
              </div>
              <div className="flex flex-col w-full">
                <div className="hidden lg:flex flex-row">
                  <div className="text-xl my-auto">23-24.05.2026</div>
                  <a href="#" className="ml-auto text-2xl text-[#0039AE] underline my-auto">Новосибирск</a>
                </div>
                <div className="flex flex-col text-center lg:text-left">
                  <div className="text-xl lg:text-3xl text-[#0039AE]">Большой стоматологический конгресс Погружение</div>
                  <div className="">*** 4.9/5</div>
                  <div className="uppercase flex flex-row gap-1 justify-center lg:justify-start"> 
                    <span className="text-2xl lg:text-4xl text-[#0039AE]">20 000 ₽ </span>
                    <span className="text-xs lg:text-sm line-through">25 000 ₽</span>
                  </div>
                  <div className="text-xs lg:text-lg leading-4 lg:text-md my-1">Cпикеры: Вьючнов Иван, Рузин Иван, Соколик Владимир,
Латыпов Айнур, Мехтиев Багир, Маланьин Сергей.......</div>
                  <div className="text-sm underline">Подробнее</div>
                  <div className="flex mt-2 text-white text-lg text-center rounded-2xl py-2 px-14 mx-auto lg:mx-0 lg:ml-auto bg-[#013AAF]">
                    Записаться
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single */}
          
        </div>


        {/* lectors */}
        <div className="group flex flex-col  gap-8 px-4 py-4 lg:px-8 lg:py-8 rounded-xl lg:rounded-4xl bg-white/10 backdrop-blur-md  transition z-10"> 
          
          <input type="checkbox" id="lectors-more" className="peer absolute opacity-0 pointer-events-none" />
          <div className="flex flex-row">
            <h2 className="text-2xl text-center lg:text-left mx-auto text-[#0039AE] xl:text-5xl lg:w-full font-semibold leading-6 mt-2">Мы работаем с лучшими лекторами</h2>
            <label htmlFor="lectors-more" className="hidden lg:flex text-sm text-center rounded-lg py-3 justify-center w-64 lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold cursor-pointer">Показать всех</label>
          </div>
          <div className="gap-4 grid grid-cols-3 lg:grid-cols-6 font-bold">
            {/* single */}
            <div className="flex flex-col gap-1 flex-1 group-has-[:checked]:flex">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo1.png)"}}></div>
              <div className="text-center text-[#777777] w-20 mx-auto text-sm uppercase leading-4 ">Иван Рузин</div>
            </div>
            {/* single */}
            <div className="flex flex flex-col gap-1 flex-1 group-has-[:checked]:flex">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo2.png)"}}></div>
              <div className="text-center w-20 mx-auto text-sm leading-4 uppercase text-[#777777]">Владимир соколик</div>
            </div>
            {/* single */}
            <div className="flex flex-col gap-1 flex-1 group-has-[:checked]:flex">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo1.png)"}}></div>
              <div className="text-center text-[#777777] w-20 mx-auto text-sm uppercase leading-4 ">Иван Рузин</div>
            </div>
            {/* single */}
            <div className="flex flex-col gap-1 flex-1 group-has-[:checked]:flex">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo2.png)"}}></div>
              <div className="text-center w-20 mx-auto text-sm leading-4 uppercase text-[#777777]">Владимир соколик</div>
            </div>
            {/* single */}
            <div className="flex flex-col gap-1 flex-1 group-has-[:checked]:flex">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo1.png)"}}></div>
              <div className="text-center text-[#777777] w-20 mx-auto text-sm uppercase leading-4 ">Иван Рузин</div>
            </div>
            {/* single */}
            <div className="flex flex-col gap-1 flex-1 group-has-[:checked]:flex">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo2.png)"}}></div>
              <div className="text-center w-20 mx-auto text-sm leading-4 uppercase text-[#777777]">Владимир соколик</div>
            </div>
            {/* single */}
            <div className="hidden flex-col gap-1 flex-1 group-has-[:checked]:flex lg:hidden">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo1.png)"}}></div>
              <div className="text-center text-[#777777] w-20 mx-auto text-sm uppercase leading-4 ">Иван Рузин</div>
            </div>
            {/* single */}
            <div className="hidden flex-col gap-1 flex-1 group-has-[:checked]:flex lg:hidden">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo2.png)"}}></div>
              <div className="text-center w-20 mx-auto text-sm leading-4 uppercase text-[#777777]">Владимир соколик</div>
            </div>
            {/* single */}
            <div className="hidden flex-col gap-1 flex-1 group-has-[:checked]:flex lg:hidden">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo1.png)"}}></div>
              <div className="text-center text-[#777777] w-20 mx-auto text-sm uppercase leading-4 ">Иван Рузин</div>
            </div>
            {/* single */}
            <div className="hidden flex-col gap-1 flex-1 group-has-[:checked]:flex lg:hidden">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo2.png)"}}></div>
              <div className="text-center w-20 mx-auto text-sm leading-4 uppercase text-[#777777]">Владимир соколик</div>
            </div>
            {/* single */}
            <div className="hidden flex-col gap-1 flex-1 group-has-[:checked]:flex lg:hidden">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo1.png)"}}></div>
              <div className="text-center text-[#777777] w-20 mx-auto text-sm uppercase leading-4 ">Иван Рузин</div>
            </div>
            {/* single */}
            <div className="hidden flex-col gap-1 flex-1 group-has-[:checked]:flex lg:hidden">
              <div className="my-auto mx-auto rounded-full border-2 border-blue-800 w-full aspect-[1/1] text-center bg-cover" style={{ backgroundImage: "url(photo2.png)"}}></div>
              <div className="text-center w-20 mx-auto text-sm leading-4 uppercase text-[#777777]">Владимир соколик</div>
            </div>
          </div>
          <label htmlFor="lectors-more" className="flex lg:hidden mx-auto align-center text-sm rounded-lg py-3 px-12 lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold cursor-pointer">Показать всех</label>
        </div>

        {/* congress info */}
        <div className="flex-col flex gap-3 p-4 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10 text-[#777777]">

          {/* bread */}
          <div className="flex gap-4 flex-row text-md text-[#BBBCBC]">
            <span>Главная</span>
            <svg className="my-auto" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66944 3.87394L0.244156 1.44866C0.0813853 1.28589 0 1.08514 0 0.846407C0 0.607677 0.0813853 0.406926 0.244156 0.244156C0.406926 0.0813853 0.607677 0 0.846407 0C1.08514 0 1.28589 0.0813853 1.44866 0.244156L4.47619 3.27169C4.563 3.3585 4.6254 3.45074 4.66338 3.5484C4.70136 3.64606 4.72035 3.75457 4.72035 3.87394C4.72035 3.9933 4.70136 4.10182 4.66338 4.19948C4.6254 4.29714 4.563 4.38938 4.47619 4.47619L1.44866 7.50372C1.28589 7.66649 1.08514 7.74788 0.846407 7.74788C0.607677 7.74788 0.406926 7.66649 0.244156 7.50372C0.0813853 7.34095 0 7.1402 0 6.90147C0 6.66274 0.0813853 6.46199 0.244156 6.29922L2.66944 3.87394Z" fill="#BBBCBC"></path></svg>
            <span className="">Конгрессы</span>
            <svg className="my-auto" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66944 3.87394L0.244156 1.44866C0.0813853 1.28589 0 1.08514 0 0.846407C0 0.607677 0.0813853 0.406926 0.244156 0.244156C0.406926 0.0813853 0.607677 0 0.846407 0C1.08514 0 1.28589 0.0813853 1.44866 0.244156L4.47619 3.27169C4.563 3.3585 4.6254 3.45074 4.66338 3.5484C4.70136 3.64606 4.72035 3.75457 4.72035 3.87394C4.72035 3.9933 4.70136 4.10182 4.66338 4.19948C4.6254 4.29714 4.563 4.38938 4.47619 4.47619L1.44866 7.50372C1.28589 7.66649 1.08514 7.74788 0.846407 7.74788C0.607677 7.74788 0.406926 7.66649 0.244156 7.50372C0.0813853 7.34095 0 7.1402 0 6.90147C0 6.66274 0.0813853 6.46199 0.244156 6.29922L2.66944 3.87394Z" fill="#BBBCBC"></path></svg>
            <span className="text-[#0039AE] ">Погружение</span>
          </div>
          
          {/* congress info */}
          <div className="flex px-4 flex-col lg:flex-row gap-4">
            <div className="lg:px-8">
              <div className="text-xl lg:hidden text-[#0039AE] font-bold mb-2">Большой стоматологический конгресс Погружение</div>
              <div className="flex flex-col aspect-[1/1] h-auto bg-contain bg-no-repeat rounded-xl lg:w-96 mb-4" style={{backgroundImage:`url(congress.png)`}}></div>
              <div className="grid lg:grid-cols-3 grid-cols-3 gap-4">
                <div className="aspect-1/1 border-[#BBBCBC] border-1 rounded-sm bg-cover bg-no-repeat bg-center bg-size-[50%]" style={{backgroundImage:`url(arrow.jpg)`}}></div>
                <div className="aspect-1/1 border-[#BBBCBC] border-1 rounded-sm"></div>
                <div className="aspect-1/1 border-[#BBBCBC] border-1 rounded-sm"></div>
              </div>
            </div>
            <div>
            
            <div className="flex flex-col lg:flex-row gap-4 font-bold">
              <div className="flex flex-col w-full">
                <div className="flex flex-col lg:gap-6">
                  <div className="hidden lg:flex lg:text-4xl text-[#0039AE]">Большой стоматологический конгресс Погружение</div>
                  <div className="flex flex-row">
                    <div className="flex flex-row gap-1">
                      <div className="w-6 h-6 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                      <div className="w-6 h-6 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                      <div className="w-6 h-6 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                      <div className="w-6 h-6 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                      <div className="w-6 h-6 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                      <div className="ml-2 my-auto">4.9/5</div>
                    </div>
                    <div className="ml-auto underline">читать отзывы</div>
                  </div>
                  <div className="uppercase flex flex-row gap-1 mt-2 lg:justify-start"> 
                    <span className="text-4xl lg:text-4xl text-[#0039AE]">20 000 ₽ </span>
                    <span className="text-xs lg:text-sm line-through">25 000 ₽</span>
                  </div>
                  <div className="text-sm lg:text-lg leading-4 lg:text-md my-3"><span className="text-[#0039AE]">Cпикеры:</span> Борис Шеплев, Иван Рузин, Багир Мехтиев,Борис Бернацкий, Максим Копылов, Сергей Маланьин, Иван Вьючнов,Дмитрий Николаев, Айнур Латыпов, Юрий Арутюнов, Рикардо Фоменко, Андрей Жук, Константин Куракин, Владимир Соколик, Роман Василиадис, Илья Саркаров, Ольга Тишкина, Тахир Тебердиев.</div>
                  <div className="inline text-center mt-2 text-white text-lg rounded-2xl py-2 px-14 bg-[#013AAF] mx-0 lg:mr-auto">
                    Записаться
                  </div>
                </div>
                </div>
              </div>
              
              

            </div>
          </div>

        </div>

        {/* date + address */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

{/* date */}
              <div className="flex-row flex gap-5 p-8 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
                <div className="bg-[#013CB0] my-auto text-[#0039AE] p-2 px-3 rounded-xl flex justify-center items-center font-bold">
                  <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.233 5.10696C19.1133 1.83851 15.6141 0 11.6775 0C7.77449 0 4.27527 1.83851 2.08825 5.10696C-0.0987598 8.30732 -0.603456 12.3929 0.742399 15.9678C1.11251 16.9211 1.6845 17.9084 2.42472 18.7936L10.9373 28.9394C11.1391 29.1437 11.341 29.2799 11.6438 29.2799C11.9466 29.2799 12.1485 29.1437 12.3504 28.9394L20.8966 18.7936C21.6368 17.9084 22.2424 16.9551 22.5789 15.9678C23.9248 12.3929 23.4201 8.30732 21.233 5.10696ZM11.6775 17.1594C8.78388 17.1594 6.39499 14.7421 6.39499 11.8141C6.39499 8.88611 8.78388 6.46882 11.6775 6.46882C14.5711 6.46882 16.96 8.88611 16.96 11.8141C16.96 14.7421 14.6047 17.1594 11.6775 17.1594Z" fill="white"/>
</svg>


                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-2xl leading-6 text-[#0039AE]">Адрес проведения</div>
                  <div className="text-xs opacity-50">Новосибирск, концертный комплекс им В.В. Маяковского</div>
                </div>

              </div>
          {/* date end */}

{/* address */}
              <div className="flex-row flex gap-5 p-8 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
                <div className="bg-[#013CB0] my-auto text-[#0039AE] p-2 rounded-xl flex justify-center items-center font-bold">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.1133 0.000759834C17.1246 -0.00556019 17.5291 0.0260399 18.3887 0.15244C18.9639 0.240921 19.8171 0.411561 20.2849 0.537962C20.7526 0.658042 21.4099 0.860283 21.7386 0.980363C22.0673 1.10044 22.7689 1.41012 23.2872 1.66925C23.8118 1.92205 24.4502 2.26965 24.7093 2.43397C24.9685 2.59829 25.512 2.97749 25.9102 3.27453C26.34 3.59053 27.029 4.20357 27.5915 4.75973C28.1477 5.32222 28.7608 6.0111 29.0769 6.44086C29.3739 6.83902 29.7532 7.38254 29.9175 7.64166C30.0818 7.90078 30.4295 8.53911 30.6823 9.06367C30.9414 9.58191 31.2512 10.2961 31.3776 10.6437C31.5103 10.9913 31.7189 11.6991 31.8516 12.2237C31.9843 12.7419 32.155 13.6394 32.2309 14.2145C32.3573 15.1119 32.3699 15.4342 32.3383 16.5213C32.3193 17.3492 32.2625 18.0697 32.174 18.6069C32.0981 19.0556 31.9401 19.814 31.8137 20.2817C31.6936 20.7494 31.4913 21.4067 31.3712 21.7353C31.2512 22.0639 30.9414 22.7592 30.6823 23.2837C30.4295 23.802 30.0818 24.4466 29.9175 24.7057C29.7532 24.9648 29.3739 25.5084 29.0769 25.9065C28.7608 26.3363 28.1477 27.0252 27.5915 27.5876C27.029 28.1438 26.34 28.7568 25.9102 29.0729C25.512 29.3699 24.9685 29.7491 24.7093 29.9134C24.4502 30.0777 23.8055 30.4253 23.2872 30.6781C22.7626 30.9373 22.0673 31.2469 21.7386 31.367C21.4099 31.4871 20.7526 31.6893 20.2849 31.8094C19.8171 31.9358 18.9639 32.1065 18.3887 32.1949C17.5607 32.315 17.0993 32.3529 16.1765 32.3529C15.2537 32.3529 14.7923 32.315 13.9643 32.1949C13.3891 32.1065 12.5358 31.9358 12.0681 31.8094C11.6003 31.6893 10.943 31.4871 10.6143 31.367C10.2856 31.2469 9.58406 30.9373 9.06577 30.6781C8.54116 30.4253 7.90277 30.0777 7.64363 29.9134C7.38448 29.7491 6.84091 29.3699 6.44271 29.0729C6.01291 28.7568 5.32396 28.1438 4.76142 27.5876C4.20521 27.0252 3.59211 26.3363 3.27608 25.9065C2.97901 25.5084 2.59977 24.9648 2.43544 24.7057C2.2711 24.4466 1.92346 23.802 1.67064 23.2837C1.41149 22.7592 1.10178 22.0513 0.975371 21.7037C0.842638 21.3561 0.634057 20.6419 0.501324 20.1237C0.368591 19.5991 0.197934 18.708 0.122087 18.1329C-0.0043256 17.2355 -0.0169668 16.9131 0.0146363 15.8261C0.0335981 14.9982 0.0904837 14.2777 0.178972 13.7405C0.25482 13.2854 0.412836 12.5334 0.539248 12.0657C0.65934 11.598 0.8616 10.9407 0.981692 10.6121C1.10178 10.2834 1.41149 9.58191 1.67064 9.06367C1.92346 8.53911 2.2711 7.90078 2.43544 7.64166C2.59977 7.38254 2.97901 6.83902 3.27608 6.44086C3.59211 6.0111 4.20521 5.32222 4.76142 4.75973C5.32396 4.20357 6.01291 3.59053 6.44271 3.27453C6.84091 2.97749 7.38448 2.59829 7.64363 2.43397C7.90277 2.26965 8.54748 1.92205 9.06577 1.66925C9.59038 1.41012 10.2856 1.10044 10.6143 0.980363C10.943 0.860283 11.6003 0.658042 12.0681 0.537962C12.5358 0.411561 13.3638 0.240921 13.901 0.15876C14.6658 0.03868 15.1462 0.00707985 16.1133 0.000759834ZM13.3322 2.81317C12.8961 2.90165 12.2324 3.08493 11.8468 3.21133C11.4613 3.34405 10.9114 3.55893 10.6143 3.68533C10.3173 3.81805 9.78 4.09613 9.4134 4.30469C9.04681 4.51325 8.42107 4.93038 8.02287 5.22742C7.62467 5.52446 6.95468 6.11222 6.5312 6.52934C6.11404 6.95278 5.52622 7.6227 5.22915 8.02087C4.93208 8.41903 4.51492 9.04471 4.30634 9.41127C4.09776 9.77783 3.81965 10.315 3.68692 10.6121C3.56051 10.9091 3.3456 11.459 3.21287 11.8445C3.08646 12.23 2.90948 12.881 2.82099 13.2981C2.7325 13.7152 2.63137 14.3346 2.59345 14.6695C2.55553 15.0108 2.52392 15.687 2.52392 16.1737C2.52392 16.6603 2.55553 17.3366 2.59345 17.6715C2.63137 18.0128 2.7325 18.6322 2.82099 19.0493C2.90948 19.4664 3.08646 20.1174 3.21287 20.5029C3.3456 20.8884 3.56051 21.4383 3.68692 21.7353C3.81965 22.0323 4.09776 22.5695 4.30634 22.9361C4.51492 23.3027 4.93208 23.9284 5.22915 24.3265C5.52622 24.7247 6.11404 25.3946 6.5312 25.818C6.95468 26.2352 7.62467 26.8229 8.02287 27.12C8.42107 27.417 9.04681 27.8341 9.4134 28.0427C9.78 28.2512 10.3173 28.5293 10.6143 28.6621C10.9114 28.7885 11.4613 29.0033 11.8468 29.1361C12.2324 29.2625 12.8834 29.4394 13.3006 29.5279C13.7177 29.6164 14.3372 29.7175 14.6785 29.7554C15.0135 29.7933 15.6898 29.8249 16.1765 29.8249C16.6632 29.8249 17.3395 29.7933 17.6808 29.7554C18.0158 29.7175 18.6352 29.6164 19.0524 29.5279C19.4695 29.4394 20.1205 29.2625 20.5061 29.1361C20.8917 29.0033 21.4415 28.7885 21.7386 28.6621C22.0357 28.5293 22.5729 28.2512 22.9395 28.0427C23.3061 27.8341 23.9319 27.417 24.3301 27.12C24.7283 26.8229 25.3983 26.2352 25.8217 25.818C26.2389 25.3946 26.8267 24.7247 27.1238 24.3265C27.4209 23.9284 27.838 23.3027 28.0466 22.9361C28.2552 22.5695 28.5333 22.0323 28.666 21.7353C28.7924 21.4383 29.0073 20.8884 29.1401 20.5029C29.2665 20.1174 29.4435 19.4664 29.5319 19.0493C29.6204 18.6322 29.7216 18.0128 29.7595 17.6715C29.7974 17.3366 29.829 16.6603 29.829 16.1737C29.829 15.687 29.7974 15.0108 29.7595 14.6695C29.7216 14.3346 29.6204 13.7152 29.5319 13.2981C29.4435 12.881 29.2665 12.23 29.1401 11.8445C29.0073 11.459 28.7924 10.9091 28.666 10.6121C28.5333 10.315 28.2552 9.77783 28.0466 9.41127C27.838 9.04471 27.4209 8.41903 27.1238 8.02087C26.8267 7.6227 26.2389 6.95278 25.8217 6.52934C25.3983 6.11222 24.7283 5.52446 24.3301 5.22742C23.9319 4.93038 23.3061 4.51325 22.9395 4.30469C22.5729 4.09613 22.0357 3.81805 21.7386 3.68533C21.4415 3.55893 20.8917 3.34405 20.5061 3.21133C20.1205 3.08493 19.4695 2.90797 19.0524 2.81949C18.6352 2.73101 18.0158 2.62989 17.6745 2.59197C17.3395 2.55405 16.6126 2.52877 16.069 2.52877C15.5191 2.53509 14.8555 2.56037 14.5963 2.59197C14.3372 2.62357 13.7683 2.71837 13.3322 2.81317ZM16.1765 7.51526C16.3345 7.51526 16.5747 7.56582 16.7137 7.62902C16.8528 7.69222 17.0424 7.8439 17.1309 7.96398C17.2194 8.08407 17.3268 8.27999 17.3711 8.40007C17.4216 8.55807 17.4406 9.63879 17.4343 15.6365L19.7919 17.4061C21.9662 19.043 22.1621 19.2073 22.3012 19.4917C22.4212 19.7382 22.4465 19.8835 22.4276 20.13C22.4086 20.3639 22.3454 20.5345 22.2127 20.7304C22.1115 20.8758 21.9093 21.0591 21.7702 21.1286C21.6017 21.2171 21.4015 21.2613 21.1698 21.2613C20.9043 21.2613 20.7526 21.2171 20.5377 21.0907C20.3797 20.9959 19.1156 20.0605 17.7313 19.0051C15.6835 17.4567 15.1778 17.0395 15.0767 16.8373C14.9503 16.5908 14.9439 16.4834 14.925 12.6345C14.9123 9.79047 14.925 8.61495 14.9756 8.43167C15.0198 8.29263 15.1146 8.08407 15.1968 7.96398C15.2789 7.8439 15.4559 7.70486 15.6139 7.63534C15.7656 7.57214 16.0185 7.51526 16.1765 7.51526Z" fill="white"/>
</svg>

                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-2xl leading-6 text-[#0039AE]">Дата проведения</div>
                  <div className="text-sm opacity-50">23-24.05.2026   10:00-20:00</div>
                </div>
              </div>
          {/* address end */}
        </div>
        {/* date/address end */}
        

        {/* partners */}
        <div className="flex flex-col gap-3">
            <div className="group rounded-xl lg:rounded-3xl shadow-lg bg-gray-50 px-4 py-4 md:px-8 md:py-8">
              <input type="checkbox" id="partner" className="peer absolute opacity-0 pointer-events-none" />
              <label htmlFor="partner" className="flex flex-row  cursor-pointer items-center">
                <div className="hover:text-[#013CB0] group-has-[:checked]:text-[#013CB0] text-xl leading-5 lg:text-4xl font-bold text-[#6C6C6C]  uppercase">Партнеры</div>
                <span className="ml-auto block lg:w-6 lg:h-6 h-3 w-3 lg:border-r-6 lg:border-b-6 border-r-4 border-b-4 border-[#0039AE] rotate-45 transition-transform duration-300 shrink-0 group-has-[:checked]:rotate-[225deg] -mt-2 "></span>
              </label>

              <div className="overflow-hidden  max-h-0 transition-all duration-300 peer-checked:max-h-full font-gilroy">
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
                  <div className="border-[#0039AE] border-2 h-20 rounded-xl px-4 py-2">
                    <div className="w-full h-full bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url(brand-1.png)" }} />
                  </div>
                  <div className="border-[#0039AE] border-2 h-20 rounded-xl px-4 py-2">
                    <div className="w-full h-full bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url(brand-2.png)" }} />
                  </div>
                  <div className="border-[#0039AE] border-2 h-20 rounded-xl px-4 py-2">
                    <div className="w-full h-full bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url(brand-3.png)" }} />
                  </div>
                  <div className="border-[#0039AE] border-2 h-20 rounded-xl px-4 py-2">
                    <div className="w-full h-full bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url(brand-4.png)" }} />
                  </div>
                  <div className="border-[#0039AE] border-2 h-20 rounded-xl px-4 py-2">
                    <div className="w-full h-full bg-no-repeat bg-contain bg-center" style={{ backgroundImage: "url(brand-5.png)" }} />
                  </div>
                </div>
              
                <div className="text-2xl leading-5 lg:text-4xl font-bold text-[#013CB0]   my-8 pt-4">Подарки от партнеров</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
                  {/* gift */}
                  <div className="flex flex-row gap-0 mx-10">
                    <div className="my-auto mx-auto rounded-full border-3 border-blue-800 w-32 xl:w-48 aspect-[1/1] bg-center text-center bg-contain bg-no-repeat" style={{backgroundImage: "url(gift.png)"}}></div>
                    <div className="flex flex-col gap-2 my-auto mx-10">
                      <div className="h-8 xl:h-12 w-auto bg-top-left bg-contain bg-no-repeat" style={{backgroundImage: "url(brand-5.png)"}}></div>
                      <div className="text-lg lg:text-2xl font-bold text-[#646464]  leading-6 max-w-48">Сертификат 20 000 ₽, до 5% заказа</div>
                    </div>
                  </div>
                  {/* gift */}
                  <div className="flex flex-row gap-0 mx-10">
                    <div className="my-auto mx-auto rounded-full border-3 border-blue-800 w-32 xl:w-48 aspect-[1/1] bg-center text-center bg-contain bg-no-repeat" style={{backgroundImage: "url(gift.png)"}}></div>
                    <div className="flex flex-col gap-2 my-auto mx-10">
                      <div className="h-8 xl:h-12 w-auto bg-top-left bg-contain bg-no-repeat" style={{backgroundImage: "url(brand-5.png)"}}></div>
                      <div className="text-lg lg:text-2xl font-bold text-[#646464]  leading-6 max-w-48">Сертификат 20 000 ₽, до 5% заказа</div>
                    </div>
                  </div>
                  

                </div>

              </div>
            </div>
          </div>


       {/* otzivy */}
        <div className="flex flex-col gap-3">
            <div className="group rounded-xl lg:rounded-3xl shadow-lg bg-gray-50 px-4 py-4 md:px-8 md:py-8">
              <input type="checkbox" id="otzivy" className="peer absolute opacity-0 pointer-events-none" />
              <label htmlFor="otzivy" className="flex flex-row  cursor-pointer items-center">
                <div className="hover:text-[#013CB0] group-has-[:checked]:text-[#013CB0] text-xl leading-5 lg:text-4xl font-bold text-[#6C6C6C]  uppercase">Отзывы</div>
                <span className="ml-auto block lg:w-6 lg:h-6 h-3 w-3 lg:border-r-6 lg:border-b-6 border-r-4 border-b-4 border-[#0039AE] rotate-45 transition-transform duration-300 shrink-0 group-has-[:checked]:rotate-[225deg] -mt-2 "></span>
              </label>

              <div className="overflow-hidden max-h-0 transition-all duration-300 peer-checked:max-h-full font-gilroy">
                {/* leave feedback */}
                <div className="flex flex-row gap-2 lg:flex-row lg:items-start mt-4">
                  <div className="flex lg:text-2xl text-[#0039AE] font-bold">Оцените мероприятие</div>
                  {/* stars */}
                  <div className="flex flex-row flex-wrap lg:ml-4 gap-1 shrink-0 ml-auto">
                    <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                    <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                    <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                    <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                    <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                  </div>
                </div>
                <input className="my-2 w-1/2 flex rounded-lg border-1 border-[#777777] px-4 py-2 text-sm lg:text-lg" type="text" name="" id="" placeholder="Ваше имя"/>
                <div className="flex lg:text-2xl text-[#0039AE] mt-3">Общее впечатление</div>
                <textarea className="my-2 w-full flex rounded-lg border-1 border-[#777777] p-4 min-h-40 lg:text-lg" name="" id="" placeholder="Поделитесь своими впечатлениями о мероприятии: что вам понравилось/не понравилось, какие моменты запомнились, как была организована программа и порекомендовали бы вы его другим."></textarea>
                <label htmlFor="policy-agree" className="flex items-center gap-2 cursor-pointer select-none lg:text-2xl text-[#0039AE] mt-3">
                  <input type="checkbox" name="" id="policy-agree" value="child" className="" />
                  <span>Я согласен на обработку моих персональных данных</span>
                </label>

                <div className="flex flex-row gap-4 flex lg:text-2xl text-[#777777] mt-4">
                  <label className="relative  my-auto inline-flex h-6 w-11 cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only"  />
                    <span className="h-6 w-11 rounded-full bg-[#D8E6FF] transition peer-checked:bg-[#0139AE] " />
                    <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                  </label>
                  <div className="text-sm my-auto lg:text-xl">Скрыть мои данные в отзыве</div>
                  <div className="ml-auto my-auto text-sm lg:text-lg my-auto">0\100</div>
                </div>
                <div className="break-words flex flex-wrap lg:text-xl text-[#777777] mt-3 mb-6 text-sm"> <span>Перед отправкой ознакомьтесь</span> <a href="" className="text-[#0039AE] underline ml-1">правилами публикации</a></div>
                <div className="flex justify-center mt-2 text-white text-lg rounded-xl py-2 px-4 bg-[#013AAF] mx-0 lg:w-64 w-full lg:ml-auto lg:-mt-10">Опубликовать</div>




                {/* otziv */}
                <h2 className="flex mt-4 text-[#0039AE] text-2xl lg:mb-6 lg:text-3xl text-[#0039AE] font-semibold mb-2 px-2">Все отзывы</h2>
                <div className=" mb-2 px-1">
                  <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 rounded-3xl bg-white/10 p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                  {/* img */}
                  <div className="flex w-full max-w-28 lg:max-w-48 rounded-xl mb-auto">
                    <svg className="w-full h-auto" viewBox="0 0 44 44" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
<rect x="0.386312" y="0.386312" width="42.3839" height="43.1566" rx="21.192" fill="white"/>
<rect x="0.386312" y="0.386312" width="42.3839" height="43.1566" rx="21.192" stroke="#9C9C9C" strokeWidth="0.772624"/>
<path d="M19.0617 5.96397C19.2776 5.90418 19.6796 5.79656 19.9615 5.73677C20.3215 5.65904 20.7294 5.62317 21.3413 5.61719C21.8213 5.61719 22.3072 5.63512 22.4212 5.66502C22.5352 5.70089 22.7931 5.75471 22.9911 5.79058C23.1891 5.83243 23.567 5.94006 23.831 6.02974C24.0949 6.11943 24.4609 6.2689 24.6409 6.35859C24.8208 6.44828 25.1448 6.63961 25.3608 6.7831C25.5767 6.92062 25.9547 7.21359 26.2006 7.42286C26.4466 7.63811 26.7706 7.955 26.9205 8.12839C27.0705 8.30776 27.2745 8.55888 27.3765 8.69042C27.4785 8.82196 27.6464 9.07308 27.7484 9.24647C27.8564 9.41389 28.0484 9.8085 28.1744 10.1075C28.3063 10.4124 28.4683 10.8788 28.5343 11.1418C28.6003 11.4049 28.6783 11.9191 28.7143 12.2779C28.7563 12.7203 28.7563 13.1628 28.7143 13.6231C28.6843 13.9998 28.6183 14.4841 28.5643 14.6994C28.5163 14.9146 28.4083 15.2793 28.3243 15.5065C28.2403 15.7337 28.0604 16.1403 27.9224 16.4034C27.7844 16.6665 27.5445 17.0551 27.3825 17.2704C27.2265 17.4856 26.8905 17.8683 26.6326 18.1313C26.3806 18.3884 25.9667 18.7532 25.7207 18.9385C25.4747 19.1239 25.0548 19.3869 24.7908 19.5245C24.5269 19.662 24.1249 19.8414 23.891 19.9251C23.657 20.0028 23.2851 20.1164 23.0511 20.1702C22.8171 20.224 22.3492 20.2898 22.0012 20.3137C21.6533 20.3436 21.0774 20.3436 20.7114 20.3137C20.3455 20.2838 19.7936 20.2001 19.4816 20.1164C19.1697 20.0387 18.6837 19.8712 18.4018 19.7517C18.1198 19.6261 17.6339 19.357 17.3219 19.1478C17.01 18.9445 16.524 18.5559 16.2421 18.2808C15.9601 18.0058 15.6062 17.6171 15.4502 17.4198C15.3002 17.2225 15.0483 16.8339 14.8863 16.5529C14.7243 16.2719 14.4903 15.7517 14.3704 15.387C14.2384 15.0103 14.1064 14.4363 14.0464 14.0417C13.9804 13.5633 13.9564 13.1448 13.9804 12.6665C13.9984 12.2898 14.0584 11.7637 14.1124 11.5006C14.1664 11.2375 14.2804 10.819 14.3644 10.5738C14.4483 10.3287 14.5983 9.96396 14.6943 9.76665C14.7963 9.56934 15.0183 9.19266 15.1922 8.92958C15.3662 8.6665 15.7202 8.22405 15.9781 7.94902C16.2421 7.67398 16.68 7.27338 16.962 7.06412C17.2439 6.85485 17.7419 6.54992 18.0718 6.38251C18.4018 6.21509 18.8457 6.02974 19.0617 5.96397Z" fill="#9C9C9C"/>
<path d="M13.8424 20.6246C14.0884 20.5529 14.5083 20.4751 14.7723 20.4452C15.0363 20.4213 15.3062 20.3914 15.3722 20.3854C15.4382 20.3854 15.6302 20.4153 15.7921 20.4572C15.9841 20.505 16.476 20.7741 17.142 21.1926C17.7179 21.5573 18.2878 21.9041 18.4018 21.9639C18.5158 22.0237 18.8937 22.1732 19.2416 22.2987C19.5896 22.4183 20.0995 22.5618 20.3815 22.6156C20.6634 22.6694 21.1974 22.7173 21.5813 22.7173C22.0552 22.7173 22.4452 22.6814 22.8411 22.5917C23.1531 22.5259 23.669 22.3765 23.981 22.2569C24.2929 22.1373 24.6469 21.9938 24.7609 21.934C24.8748 21.8742 25.3488 21.5872 25.8107 21.2943C26.2726 20.9953 26.7886 20.6844 26.9505 20.6067C27.1185 20.523 27.3405 20.4393 27.4485 20.4153C27.5504 20.3974 27.9164 20.4094 28.2583 20.4452C28.5943 20.4811 29.0982 20.5768 29.3802 20.6605C29.6621 20.7382 30.0941 20.9116 30.34 21.0431C30.586 21.1687 30.976 21.4198 31.2039 21.5932C31.4319 21.7606 31.7678 22.0775 31.9538 22.2928C32.1338 22.508 32.3917 22.8548 32.5297 23.07C32.6737 23.2853 32.8777 23.644 32.9977 23.8772C33.1116 24.1104 33.2976 24.5409 33.4116 24.8339C33.5316 25.1328 33.7056 25.7068 33.8075 26.1194C33.9095 26.5319 34.0535 27.2016 34.1195 27.6141C34.1855 28.0267 34.2695 28.7681 34.3055 29.2584C34.3415 29.7546 34.3595 30.5737 34.3415 31.082C34.3235 31.7516 34.2755 32.1403 34.1855 32.487C34.1135 32.7501 33.9575 33.1806 33.8255 33.4437C33.6996 33.7068 33.4536 34.1014 33.2736 34.3286C33.0936 34.5498 32.7637 34.8846 32.5297 35.07C32.2958 35.2553 31.8638 35.5184 31.5699 35.6619C31.2759 35.7994 30.802 35.9788 30.0101 36.1941L21.7913 36.212C15.6662 36.2299 13.4645 36.212 13.1525 36.1582C12.9246 36.1223 12.5166 36.0207 12.2527 35.9429C11.9887 35.8592 11.6107 35.7098 11.4128 35.6081C11.2148 35.5124 10.9208 35.3271 10.7529 35.2075C10.5909 35.0879 10.2609 34.789 10.033 34.5438C9.73302 34.221 9.53505 33.94 9.33108 33.5334C9.1751 33.2225 9.00713 32.8039 8.95313 32.6066C8.90514 32.4093 8.83915 32.0625 8.80316 31.8293C8.77316 31.5962 8.74316 31.1178 8.74316 30.7531C8.74316 30.3944 8.77316 29.7187 8.80316 29.2584C8.83915 28.798 8.92314 28.0685 8.98913 27.644C9.06112 27.2195 9.2051 26.514 9.31308 26.0895C9.42107 25.6649 9.62504 25.0312 9.75702 24.6844C9.889 24.3376 10.141 23.8174 10.3089 23.5185C10.4769 23.2255 10.7409 22.8189 10.8969 22.6216C11.0468 22.4243 11.3168 22.1253 11.4908 21.952C11.6587 21.7786 11.9707 21.5215 12.1747 21.3839C12.3846 21.2464 12.7446 21.0491 12.9726 20.9415C13.2005 20.8339 13.5965 20.6904 13.8424 20.6246Z" fill="#9C9C9C"/>
</svg>

                  </div>
                  {/* right block */}
                  <div className="flex min-w-0 flex-col gap-2 font-bold text-[#777777] mb-1">
                    <div className="flex text-sm lg:text-xl">24.05.2026   17:44</div>
                    <div className="flex flex-row gap-2 lg:flex-row lg:items-start ">
                      <div className="break-words flex lg:text-2xl text-[#0039AE]">Василевская Наталья Михайловна</div>
                      {/* stars */}
                      <div className="flex flex-row flex-wrap lg:ml-auto gap-1 shrink-0 ml-auto">
                        <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                        <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                        <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                        <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                        <div className="w-8 h-8 bg-cover" style={{backgroundImage:`url(star.png)`}}></div>
                      </div>
                    </div>

                    <div className="text-sm lg:text-xl lg:text-2xl my-1">Это трудно описать словами. Эмоции зашкаливают. Разве можно достись этого уровня? Это космос! Эстетическое удовольствие и мечта! Да, теперь у меня появилась мечта и есть куда стремится. Спасибо огромное, что вы есть и делитесь опытом и знаниями.</div>
                    <div className="text-sm lg:text-xl lg:text-2xl underline text-[#0039AE]">Большой стоматологический конгресс Погружение 2025</div>

                  </div>
                  </div>

              </div>
            </div>



            </div>
          </div>
          

      </div>
    </div>

    
    {/* footer */}
    
    <div className="flex flex-col bg-gradient-to-r from-[#091930] via-[#0156C5] to-[#091930] gap-8  ">
      <div className="max-w-[1350px] flex w-full mx-auto flex flex-col py-12 lg:gap-8 gap-6 px-16 lg:px-8  ">

          <div className="flex flex-col justify-between lg:flex-row gap-6 font-gilroy text-white  ">
            {/* inn */}
            <div className="flex flex-col gap-4 my-auto">
              <div className="opacity-80 max-w-80">
              ИП Добрынин Вячеслав Александрович ИНН: 540862498786<br/>
              ИП Михайлов Михаил Владимирович ИНН: 434548399519ОГРНИП: 322435000047713
              </div>
              <div className="flex w-60 h-9 bg-fill bg-no-repeat" style={{backgroundImage: "url(visa.png)"}}></div>

            {/* social */}
              <div className="flex flex-row gap-4 ">
                <div className="flex w-14 h-14 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 bg-no-repeat bg-center" style={{ backgroundImage: "url(i-vk.png)"}}>
                </div>
                <div className="flex w-14 h-14 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 bg-no-repeat bg-center" style={{ backgroundImage: "url(i-tg.png)"}}>
                </div>
              </div>
            </div>
          

            {/* events */}
            <div className="flex flex-col gap-2  my-auto">
              <div className="text-2xl lg:text-3xl font-semibold">Мероприятия</div>
              <div className="flex gap-2 lg:text-lg flex-col opacity-50">
                <div>Конгрессы</div>
                <div>Вебинары</div>
                <div>Курсы</div>
                <div>Бесплатное обучение</div>
              </div>
            </div>
            {/* info */}
            <div className="flex flex-col gap-2  my-auto">
              <div className="text-2xl lg:text-3xl font-semibold">Информация</div>
              <div className="flex gap-2 lg:text-lg flex-col opacity-50">
                <div>Лекторы</div>
                <div>Вопросы</div>
                <div>DSK-MED (магазин)</div>
                <div>Пользовательское соглашение</div>
                <div>Документы</div>
              </div>
            </div>
            {/* contacts */}
            <div className="flex flex-col gap-8 ">
                
                {/* phone */}
                <div className="flex flex-col">
                  <div className="gap-4 flex my-auto">
                      <div className="flex w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 ">
                        <svg width="13" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3927 14.1508C11.7081 14.1508 10.0596 13.8019 8.44717 13.1039C6.83474 12.406 5.37273 11.4013 4.06114 10.0897C2.74954 8.79011 1.74479 7.33111 1.04687 5.71267C0.348957 4.09423 -2.24344e-10 2.4427 0 0.758079C0 0.517419 0.0661815 0.330908 0.198545 0.198545C0.330908 0.0661815 0.517419 0 0.758079 -1.42262e-10L4.36798 -8.19702e-10C4.53644 -8.51316e-10 4.68986 0.0571567 4.82824 0.17147C4.96662 0.285784 5.05386 0.421155 5.08996 0.577584L5.63144 3.646C5.65551 3.81446 5.64949 3.96487 5.61339 4.09724C5.5773 4.2296 5.52315 4.33188 5.45095 4.40408L3.5377 6.35342C3.76633 6.76255 4.03707 7.16264 4.34993 7.55372C4.66279 7.94479 5.01776 8.33887 5.41485 8.73596C5.77584 9.08492 6.14285 9.40981 6.51587 9.71063C6.88889 10.0115 7.26793 10.2762 7.65299 10.5048L9.63843 8.59156C9.7347 8.4953 9.84299 8.42912 9.96332 8.39302C10.0837 8.35692 10.204 8.3509 10.3243 8.37497L13.5371 9.06085C13.7056 9.10898 13.85 9.19622 13.9703 9.32257C14.0906 9.44891 14.1508 9.5903 14.1508 9.74673L14.1508 13.3927C14.1508 13.6334 14.0846 13.8199 13.9523 13.9523C13.8199 14.0846 13.6334 14.1508 13.3927 14.1508Z" fill="#BBBCBC"/>
        </svg>
                      </div>
                    <div className="flex flex-col">
                      <div className="text-xl font-gilroy font-bold">8 (800) 234-59-56</div>
                      <div className="underline flex ml-auto text-xs opacity-50">Заказать звонок</div>
                    </div>
                  </div>
                </div>
                {/* address */}
                <div className="flex flex-col">
                  <div className="gap-4 flex my-auto">
                      <div className="flex w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 ">
                        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4745 2.96512C11.2292 1.06744 9.17337 0 6.86058 0C4.56756 0 2.51175 1.06744 1.22686 2.96512C-0.0580219 4.82326 -0.354534 7.19535 0.436164 9.27093C0.653606 9.82442 0.989652 10.3977 1.42454 10.9116L6.4257 16.8023C6.5443 16.9209 6.66291 17 6.84082 17C7.01872 17 7.13733 16.9209 7.25593 16.8023L12.2769 10.9116C12.7117 10.3977 13.0676 9.84419 13.2652 9.27093C14.0559 7.19535 13.7594 4.82326 12.4745 2.96512ZM6.86058 9.96279C5.16058 9.96279 3.75709 8.5593 3.75709 6.8593C3.75709 5.1593 5.16058 3.75581 6.86058 3.75581C8.56058 3.75581 9.96407 5.1593 9.96407 6.8593C9.96407 8.5593 8.58035 9.96279 6.86058 9.96279Z" fill="white"/>
    </svg>

                      </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-gilroy font-bold w-44">г. Москва, ул. Чапаевский переулок, 6</div>
                    </div>
                  </div>
                </div>

                {/* time */}
                <div className="flex flex-col">
                  <div className="gap-4 flex my-auto">
                      <div className="flex w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 ">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.1125 7.6875V5.26875C9.1125 4.99375 9.01562 4.75938 8.82188 4.56563C8.62813 4.37188 8.39375 4.275 8.11875 4.275C7.84375 4.275 7.60938 4.37188 7.41563 4.56563C7.22188 4.75938 7.125 4.99375 7.125 5.26875V8.1C7.125 8.2375 7.15 8.3665 7.2 8.487C7.25 8.60763 7.325 8.71613 7.425 8.8125L9.76875 11.1562C9.95625 11.3438 10.1844 11.4406 10.4531 11.4469C10.7219 11.4531 10.9563 11.3563 11.1562 11.1562C11.3438 10.9688 11.4406 10.7375 11.4469 10.4625C11.4531 10.1875 11.3625 9.95625 11.175 9.76875L9.1125 7.6875ZM8.1 16.2C6.9795 16.2 5.9265 15.9874 4.941 15.5621C3.9555 15.1369 3.09825 14.5598 2.36925 13.8308C1.64025 13.1018 1.06313 12.2445 0.637875 11.259C0.212625 10.2735 0 9.2205 0 8.1C0 6.97625 0.213 5.92025 0.639 4.932C1.065 3.94362 1.64313 3.08394 2.37338 2.35294C3.10363 1.62181 3.96088 1.04688 4.94513 0.628125C5.92938 0.209375 6.981 0 8.1 0C9.22363 0 10.2795 0.209375 11.2676 0.628125C12.2559 1.04688 13.1156 1.62188 13.8469 2.35313C14.5781 3.08438 15.1531 3.94425 15.5719 4.93275C15.9906 5.92138 16.2 6.97762 16.2 8.1015C16.2 9.2255 15.9906 10.2781 15.5719 11.2594C15.1531 12.2406 14.5782 13.0964 13.8471 13.8266C13.1161 14.5569 12.2564 15.135 11.268 15.561C10.2798 15.987 9.22375 16.2 8.1 16.2Z" fill="white"/>
    </svg>
                      </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-gilroy font-bold w-44">ПН-ЧТ: 10:00-18:00, 
    ПТ: 10:00-17:00 </div>
                    </div>
                  </div>
                </div>

            </div>

          </div>

          {/* big-logo */}
          <div className="flex w-full justify-center">
            <div className="flex lg:w-120 w-60 bg-cover bg-no-repeat aspect-[15/8] mt-3" style={{backgroundImage: "url(logo-xl.png)"}}></div>
          </div>
        </div>

    {/* </div> */}
  </div>
  {isModalOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#091930]/60 px-4 backdrop-blur-md"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#091930] via-[#003BAF] to-[#0156C5] p-6 lg:p-8 font-gilroy text-white "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="absolute -right-3 -top-12 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/40 text-white backdrop-blur-md  hover:bg-white/30 transition"
          aria-label="Закрыть"
        >
          <span className="text-4xl font-light leading-none">×</span>
        </button>

        <div className="flex items-start gap-4 pr-12">
          <div>
            <div className="text-2xl lg:text-3xl font-semibold">Пожалуйста, авторизуйтесь</div>
            <div className="mt-2 text-sm lg:text-base text-white/60">
              Оставьте телефон, и мы отправим код для входа.
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <input
            className="w-full rounded-xl bg-white px-6 py-4 text-md font-semibold text-[#2C2C32] placeholder:text-[#2C2C32]"
            type="text"
            placeholder="Телефон"
          />
          <input
            className="w-full rounded-xl bg-white px-6 py-4 text-md font-semibold text-[#2C2C32] placeholder:text-[#2C2C32]"
            type="text"
            placeholder="Код из SMS"
          />
          <button
            type="button"
            className="flex justify-center mx-auto w-full text-lg rounded-2xl py-4  ml-auto bg-white text-[#0039AE] font-bold"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  )}
  </>
  );
}
