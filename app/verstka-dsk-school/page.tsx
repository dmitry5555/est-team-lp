import Image from "next/image"

export default function Home() {
  return (
    <div className="font-raleway bg-red-00 max-w-[1350px] px-6 md:px-14 mx-auto flex flex-col mb-12 py-12 gap-8">
  
      {/* header */}
      <div className="flex flex-row gap-4">

        {/* header - full */}
        <div className="hidden md:text-sm xl:text-xl lg:flex flex-row gap-6 my-auto">
            <div>Конгрессы</div>

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
        <div className="flex lg:hidden w-20 h-auto bg-fill bg-no-repeat mt-1.5" style={{
      backgroundImage: "url(logo.png)"}}></div>
        <div className="flex justify-end flex-col ml-auto">
          <div className="gap-2 flex my-auto">
            <div className="my-auto"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3927 14.1508C11.7081 14.1508 10.0596 13.8019 8.44717 13.1039C6.83474 12.406 5.37273 11.4013 4.06114 10.0897C2.74954 8.79011 1.74479 7.33111 1.04687 5.71267C0.348957 4.09423 -2.24344e-10 2.4427 0 0.758079C0 0.517419 0.0661815 0.330908 0.198545 0.198545C0.330908 0.0661815 0.517419 0 0.758079 -1.42262e-10L4.36798 -8.19702e-10C4.53644 -8.51316e-10 4.68986 0.0571567 4.82824 0.17147C4.96662 0.285784 5.05386 0.421155 5.08996 0.577584L5.63144 3.646C5.65551 3.81446 5.64949 3.96487 5.61339 4.09724C5.5773 4.2296 5.52315 4.33188 5.45095 4.40408L3.5377 6.35342C3.76633 6.76255 4.03707 7.16264 4.34993 7.55372C4.66279 7.94479 5.01776 8.33887 5.41485 8.73596C5.77584 9.08492 6.14285 9.40981 6.51587 9.71063C6.88889 10.0115 7.26793 10.2762 7.65299 10.5048L9.63843 8.59156C9.7347 8.4953 9.84299 8.42912 9.96332 8.39302C10.0837 8.35692 10.204 8.3509 10.3243 8.37497L13.5371 9.06085C13.7056 9.10898 13.85 9.19622 13.9703 9.32257C14.0906 9.44891 14.1508 9.5903 14.1508 9.74673L14.1508 13.3927C14.1508 13.6334 14.0846 13.8199 13.9523 13.9523C13.8199 14.0846 13.6334 14.1508 13.3927 14.1508Z" fill="#BBBCBC"/>
</svg>
</div>
            <div className="text-md md:text-xl font-gilroy font-bold">8 (800) 234-59-56</div>
          </div>
          <div className="underline flex ml-auto text-xs">Заказать звонок</div>
        </div>
        <div className="lg:hidden flex flex-row gap-3">
          <div className="bg-gradient-to-b from-[#013AAF] to-[#0056C5] my-auto w-10 h-10 rounded-xl flex justify-center items-center ">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.15883 8.48518C6.97774 8.48518 5.97537 8.07335 5.15172 7.2497C4.32806 6.42605 3.91624 5.42368 3.91624 4.24259C3.91624 3.0615 4.32806 2.05913 5.15172 1.23548C5.97537 0.411827 6.97774 0 8.15883 0C9.33991 0 10.3423 0.411827 11.1659 1.23548C11.9896 2.05913 12.4014 3.0615 12.4014 4.24259C12.4014 5.42368 11.9896 6.42605 11.1659 7.2497C10.3423 8.07335 9.33991 8.48518 8.15883 8.48518ZM0 15.1754V14.3129C0 13.6757 0.151521 13.1007 0.454563 12.5879C0.757605 12.0751 1.16555 11.6865 1.67839 11.4224C2.70407 10.894 3.76083 10.4977 4.84867 10.2335C5.93652 9.96931 7.0399 9.83721 8.15883 9.83721C9.27775 9.83721 10.3811 9.96931 11.469 10.2335C12.5568 10.4977 13.6136 10.894 14.6393 11.4224C15.1521 11.6865 15.56 12.0751 15.8631 12.5879C16.1661 13.1007 16.3177 13.6757 16.3177 14.3129V15.1754C16.3177 15.8747 16.0807 16.4614 15.6067 16.9354C15.1327 17.4094 14.546 17.6464 13.8467 17.6464H2.47096C1.77163 17.6464 1.18497 17.4094 0.710983 16.9354C0.236994 16.4614 0 15.8747 0 15.1754Z" fill="white"/>
</svg>

          </div>
          <div className=" my-auto w-10 h-10 rounded-xl flex justify-center items-center bg-[#F0F4F6]">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.924731 11.0968C0.662724 11.0968 0.4431 11.0082 0.26586 10.8309C0.0886201 10.6537 0 10.4341 0 10.172C0 9.91004 0.0886201 9.69041 0.26586 9.51317C0.4431 9.33593 0.662724 9.24731 0.924731 9.24731H15.7204C15.9824 9.24731 16.2021 9.33593 16.3793 9.51317C16.5565 9.69041 16.6452 9.91004 16.6452 10.172C16.6452 10.4341 16.5565 10.6537 16.3793 10.8309C16.2021 11.0082 15.9824 11.0968 15.7204 11.0968H0.924731ZM0.924731 6.47312C0.662724 6.47312 0.4431 6.3845 0.26586 6.20726C0.0886201 6.03002 0 5.81039 0 5.54839C0 5.28638 0.0886201 5.06676 0.26586 4.88952C0.4431 4.71228 0.662724 4.62366 0.924731 4.62366H15.7204C15.9824 4.62366 16.2021 4.71228 16.3793 4.88952C16.5565 5.06676 16.6452 5.28638 16.6452 5.54839C16.6452 5.81039 16.5565 6.03002 16.3793 6.20726C16.2021 6.3845 15.9824 6.47312 15.7204 6.47312H0.924731ZM0.924731 1.84946C0.662724 1.84946 0.4431 1.76084 0.26586 1.5836C0.0886201 1.40636 0 1.18674 0 0.924731C0 0.662724 0.0886201 0.4431 0.26586 0.26586C0.4431 0.0886201 0.662724 0 0.924731 0H15.7204C15.9824 0 16.2021 0.0886201 16.3793 0.26586C16.5565 0.4431 16.6452 0.662724 16.6452 0.924731C16.6452 1.18674 16.5565 1.40636 16.3793 1.5836C16.2021 1.76084 15.9824 1.84946 15.7204 1.84946H0.924731Z" fill="#0139AE"/>
</svg>

          </div>
        </div>
          
      </div>

        {/* header2 - search */}
        <div className="flex-col flex">
          <div className="hidden">1</div>
          <div className="relative flex w-full">
            <input className="flex w-full bg-gradient-to-b from-gray-50 to-white border-1 border-gray-200 rounded-lg px-4 py-3 pr-10 placeholder:text-sm placeholder:font-semibold font-semibold" type="text" placeholder="Поиск" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold pointer-events-none"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6824 13.6305L11.9894 9.93727C12.6169 8.93832 12.9811 7.75763 12.9811 6.49052C12.9811 2.9057 10.075 0 6.49027 0C2.90559 0 -0.000244141 2.9057 -0.000244141 6.49052C-0.000244141 10.0755 2.90545 12.9809 6.49027 12.9809C7.86922 12.9809 9.14647 12.5498 10.1975 11.8172L13.8465 15.4666C14.1001 15.7199 14.4325 15.846 14.7645 15.846C15.0969 15.846 15.4289 15.7199 15.6828 15.4666C16.1895 14.9593 16.1895 14.1377 15.6824 13.6305ZM6.49027 10.8781C4.06735 10.8781 2.10299 8.91385 2.10299 6.49079C2.10299 4.06773 4.06735 2.10337 6.49027 2.10337C8.91333 2.10337 10.8776 4.06773 10.8776 6.49079C10.8776 8.91385 8.91333 10.8781 6.49027 10.8781Z" fill="#BBBCBC"/>
</svg>
</span>
          </div>
          <div className="hidden">3</div>
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
                <div className="min-w-full h-64 bg-blue-500 flex items-center justify-center text-white text-3xl shrink-0">
                  Слайд 1
                </div>
                {/* Слайд 2 */}
                <div className="min-w-full h-64 bg-green-500 flex items-center justify-center text-white text-3xl shrink-0">
                  Слайд 2
                </div>
                {/* Слайд 3 */}
                <div className="min-w-full h-64 bg-purple-500 flex items-center justify-center text-white text-3xl shrink-0">
                  Слайд 3
                </div>
              </div>
            </div>

            {/* Кнопки Назад */}
            <label htmlFor="s3" className="hidden peer-checked/s1:flex absolute left-0 translate-x-[-50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
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
            <div className="h-full ">
              {/* web */}
              <div className="text-white rounded-2xl overflow-hidden bg-bottom bg-cover bg-no-repeat"
              style={{backgroundImage: `url(laptop.png),linear-gradient(266.35deg, #061122 9.01%, #0A1D36 99.03%)`}}>
                <input type="checkbox" id="webinar-toggle" className="peer hidden" />
                <label htmlFor="webinar-toggle" className="lg:pointer-events-none gap-1 cursor-pointer font-bold flex px-4 py-5 items-center text-xl uppercase">
                  <div className="lg:hidden w-10 flex items-center justify-center h-full my-auto">
                    <img className="w-9" src={'./play-circle.png'} />
                  </div>
                  <div className="w-6/12 lg:p-4 lg:pt-0 lg:h-14 lg:text-3xl">Вебинары</div>
                  <span className="lg:hidden ml-auto block w-2 h-2 border-r-2 border-b-2 border-white rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-128 lg:!h-96">
                  <div className="px-7 pb-5 pt-2 gap-3 flex flex-wrap">
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Эндодонтия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Маркетинг и Бизнес</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Детская стоматология</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Зуботехнические курсы</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Ортопедия</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">Гнатология</div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
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
                    <img className="w-9" src={'./play-circle.png'} />
                  </div>
                  <div className="w-6/12 lg:p-4 lg:text-3xl lg:pt-0 lg:h-14 text-[#0039AE]">Курсы</div>
                  <span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-blue-800 rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4 lg:hidden"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-128 lg:!h-48 ">
                  <div className="px-7 pb-5 pt-2 gap-3 flex flex-wrap">
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Эндодонтия</div>
                    
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
                    <img className="w-9" src={'./play-circle.png'} />
                  </div>
                  <div className="w-6/12 lg:p-4 lg:pt-0 lg:h-14 text-lg lg:text-3xl text-[#0039AE]">Бесплатное обучение</div>
                  <span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-blue-800 rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4 lg:hidden"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-128 lg:!h-48">
                  <div className="px-7 pb-5 pt-2 gap-3 flex flex-wrap">
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Эндодонтия</div>
                    <div className="bg-[#F4F4F4] px-2 py-1 rounded-lg font">Эндодонтия</div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            
            <div className="col-span-2">
              {/* congress */}
              <div className="text-white rounded-2xl overflow-hidden bg-bottom bg-cover bg-no-repeat"
              style={{backgroundImage: `url(laptop.png),linear-gradient(266.35deg, #061122 9.01%, #0A1D36 99.03%)`}}>
                <input type="checkbox" id="congress-toggle" className="peer hidden" />
                <label htmlFor="congress-toggle" className="lg:pointer-events-none gap-1 cursor-pointer font-bold flex px-4 py-5 items-center text-xl uppercase">
                  <div className="lg:hidden w-10 flex items-center justify-center h-full my-auto">
                    <img className="w-9" src={'./play-circle.png'} />
                  </div>
                  <div className="w-6/12 lg:p-4 lg:pt-0 lg:h-14 lg:text-3xl">Конгрессы</div>
                  <span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-white rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4 lg:hidden"></span>
                </label>
                <div className="overflow-hidden transition-all duration-300 h-0 peer-checked:h-128 lg:!h-48">
                  <div className="px-7 pb-5 pt-2 gap-3 flex flex-wrap">
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">123</div>
                    <div className="bg-white/10 px-2 py-1 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)]">123</div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            
          </div>

        </div>


      <div className="flex flex-col w-full mx-auto gap-5">
        {/* lk */}

        <div className="flex flex-col gap-3.5 bg-gray-100 rounded-2xl p-4">
          {/* progile */}
          <div className="flex flex-row my-auto gap-2">
            <div className="bg-red-100 my-auto w-10 h-10 rounded-md flex justify-center items-center">btn1</div>
            <div className="my-auto">
              <div className="">Мои курсы</div>
              <div className="text-xs">+722211122</div>
            </div>
            <div className="my-auto ml-auto">
              <span className="ml-auto block w-2 h-2 border-r-2 border-b-2 border-black rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4"></span>
            </div>
          </div>
          {/* other */}
          <div className="flex flex-row my-auto gap-2">
            <div className="bg-red-100 my-auto w-10 h-10 rounded-md flex justify-center items-center">btn1</div>
            <div className="my-auto">Мои курсы</div>
          </div>
          <div className="flex flex-row my-auto gap-2">
            <div className="bg-red-100 my-auto w-10 h-10 rounded-md flex justify-center items-center">btn1</div>
            <div className="my-auto">Мои курсы</div>
          </div>
        </div>

        {/* courses */}
        <div className=" flex flex-row gap-4 font-gilroy">
          <h2 className="text-[#0039AE] text-2xl w-48 lg:text-5xl lg:w-full lg:text-center font-semibold ">Ближайшие курсы</h2>
          <div className="ml-auto w-24 text-right text-sm lg:hidden">фильтры</div>
        </div>

        {/* all courses */}
        {/* single */}
        <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-4xl font-gilroy text-md lg:text-lg 
        shadow-lg bg-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] transition z-10">
          <div className="flex flex-col h-48 bg-gray-100 rounded-xl">
            <div>img</div>
          </div>
          <div className="flex flex-col text-center ">
            <div className="mb-2 mt-1 uppercase text-[#777777]">Москва → 10.03.25</div>
            <div className="uppercase font-bold text-[#777777]">ИВАН ВЬЮЧНОВ</div>

            <div className="uppercase font-bold text-[#0039AE]">Клинические аспекты применения материалов на основе МТА</div>
            <div className="mt-2 text-sm text-center rounded-lg py-2 w-48 mx-auto lg:uppercase bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold">Подробнее</div>
          </div>
        </div>

        <div className="mt-2 rounded-lg py-2 w-48 mx-auto text-center bg-gradient-to-r from-[#013AAF] to-[#0056C5] text-white font-bold">Показать еще</div>


  <div className="flex flex-col gap-4">
    <h2 className="text-2xl w-48 text-center mx-auto">Популярные
  вопросы</h2>

    <div className="flex flex-col gap-3 uppercase">
      <div className="group rounded-4xl shadow-lg bg-white">
        <input type="checkbox" id="faq-1" className="peer absolute opacity-0 pointer-events-none" />

        <label htmlFor="faq-1" className="flex flex-row px-4 py-2 cursor-pointer items-center">
          <div className="text-3xl font-bold text-[#6C6C6C] p-4">Для кого ...</div>
          <span className="ml-auto block w-6 h-6 border-r-6 border-b-6 border-[#0039AE] rotate-45 transition-transform duration-300 shrink-0 group-has-[:checked]:rotate-[225deg] -mt-2 mr-8"></
  span>
        </label>

        <div className="overflow-hidden max-h-0 transition-all
  duration-300 peer-checked:max-h-40">
          <div className="px-4 pb-4 text-sm">описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание </div>
        </div>
      </div>
    </div>
  </div>



        {/* congress */}
        <div className="flex flex-row gap-4">
          <h2 className="text-2xl w-48">Конгрессы</h2>
          {/* <div className="ml-auto">фильтры</div> */}
        </div>
        {/* all courses */}
        <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-4xl shadow-lg">
          
          {/* single */}
          <div className="flex flex-col border-blue-800 border-b-2 pb-3 gap-4">
            <div className="flex flex-row">
              <div className="text-sm my-auto">23-24.05.2026</div>
              <a href="#" className="ml-auto underline my-auto">Новосибирск</a>
            </div>
            <div className="flex flex-col h-48 bg-gray-100 rounded-xl mx-6">
              <div>img</div>
            </div>
            <div className="flex flex-col text-center ">
              <div className="text-lg">Большой стоматологический</div>
              <div className="">***</div>
              <div className="uppercase text-2xl">20 000</div>
              <div className="text-sm my-1">Спикеры ... </div>
              <div className="text-xs underline">Подробнее</div>
              <div className="mt-2 bg-red-100 text-center rounded-lg py-2 w-48 mx-auto ">Записаться</div>
            </div>
          </div>

          {/* single */}
          <div className="flex flex-col h-48 bg-gray-100 rounded-xl">
            <div>img</div>
          </div>
          <div className="flex flex-col text-center ">
            <div className="mb-2 uppercase">Москва</div>
            <div className="uppercase">Иван</div>
            <div className="uppercase">Клинические ... </div>
            <div className="mt-2 bg-red-100 text-center rounded-lg py-2 w-48 mx-auto ">Подробнее</div>
          </div>
        </div>

        {/* courses - view 2 */}
        <div className="flex flex-row gap-4">
          <h2 className="text-2xl w-48">Конгрессы 2</h2>
          {/* <div className="ml-auto">фильтры</div> */}
        </div>
        {/* all courses */}
        <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-4xl shadow-lg">
          
          {/* single */}
          <div className="flex flex-col border-blue-800 border-b-2 pb-3 gap-4">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col h-48 bg-gray-100 rounded-xl mx-6 w-96">
                <div>img</div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row">
                  <div className="text-sm my-auto">23-24.05.2026</div>
                  <a href="#" className="ml-auto underline my-auto">Новосибирск</a>
                </div>
                <div className="flex flex-col  ">
                  <div className="text-lg">Большой стоматологический</div>
                  <div className="">***</div>
                  <div className="uppercase text-2xl">20 000</div>
                  <div className="text-sm my-1">Спикеры ... </div>
                  <div className="text-xs underline">Подробнее</div>
                  <div className="mt-2 bg-red-100 text-center rounded-lg py-2 w-48   ml-auto">Записаться</div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="mt-2 bg-red-100 rounded-lg py-2 w-48 mx-auto text-center">Показать еще</div>

        {/* faq */}
        <div className="flex flex-col bg-red-100 gap-4">
          <h2 className="text-2xl w-48 text-center mx-auto">Популярные вопросы</h2>
          {/* faq-quest */}
          <div className="flex flex-col gap-3 uppercase">
            <div className="flex flex-row rounded-2xl
            block border-l-2 border-t-2 border-white px-4 py-2">
              <div>Для кого ...</div>
              <div className="ml-auto">v</div>
            </div>
            <div className="flex flex-row rounded-2xl
            block border-l-2 border-t-2 border-white px-4 py-2">
              <div>Для кого ...</div>
              <div className="ml-auto">v</div>
            </div>
          </div>
        </div>


        {/* lectors */}
        <div className="flex flex-col bg-red-100 gap-5">
          <h2 className="text-2xl w-72 text-center mx-auto">Мы работаем с лучшими лекторами</h2>
          <div className="flex flex-wrap gap-4 w-full">
            {/* single */}
            <div className="flex flex-col gap-1 flex-1">
              <div className="bg-red-100 my-auto mx-auto rounded-full border-2 border-blue-800 h-26 w-26 text-center">123</div>
              <div className="text-center text-sm uppercase">name</div>
            </div>
            {/* single */}
            <div className="flex flex-col gap-1 flex-1">
              <div className="bg-red-100 my-auto mx-auto rounded-full border-2 border-blue-800 h-26 w-26 text-center">123</div>
              <div className="text-center text-sm uppercase">name</div>
            </div>
            {/* single */}
            <div className="flex flex-col gap-1 flex-1">
              <div className="bg-red-100 my-auto mx-auto rounded-full border-2 border-blue-800 h-26 w-26 text-center">123</div>
              <div className="text-center text-sm uppercase">name</div>
            </div>
            {/* single */}
            <div className="flex flex-col gap-1 flex-1">
              <div className="bg-red-100 my-auto mx-auto rounded-full border-2 border-blue-800 h-26 w-26 text-center">123</div>
              <div className="text-center text-sm uppercase">name</div>
            </div>
  
          </div>
        </div>



      </div>
    </div>
  );
}
