import Image from "next/image"

export default function Home() {
  return (
    <div className="font-raleway max-w-[1350px] px-6 md:px-14 mx-auto flex flex-col mb-12 py-12 gap-8">
  
      {/* header */}
      <div className="flex flex-row gap-4">
        {/* header - full */}
        <div className="hidden text-sm lg:text-xl lg:flex flex-row gap-6 my-auto">
          <div>Конгрессы</div>
          <div className="text-blue-700 ">Вебинары</div>
          <div className="flex flex-row gap-2.5"><div className="">Курсы</div>
            <span className="ml-auto block w-2.5 h-2.5 border-r-2 border-b-2 border-black rotate-45 transition-transform duration-300 peer-checked:rotate-[225deg] mr-4 flex mt-0.5 lg:mt-1.5"></span>
          </div>
          <div>Бесплатное обучение</div>
          <div>Лекторы</div>
          <div>Вопросы</div>
        </div>

        {/* header - all */}
        <div className="hidden lg:flex text-xl font-bold font-raleway min-w-24 my-auto">DSK-MED</div>
        <div className="flex lg:hidden">logo</div>
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
        <div className="md:hidden flex flex-row gap-3">
          <div className="bg-gradient-to-b from-[#013AAF] to-[#0056C5] my-auto w-10 h-10 rounded rounded-xl flex justify-center items-center ">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.15883 8.48518C6.97774 8.48518 5.97537 8.07335 5.15172 7.2497C4.32806 6.42605 3.91624 5.42368 3.91624 4.24259C3.91624 3.0615 4.32806 2.05913 5.15172 1.23548C5.97537 0.411827 6.97774 0 8.15883 0C9.33991 0 10.3423 0.411827 11.1659 1.23548C11.9896 2.05913 12.4014 3.0615 12.4014 4.24259C12.4014 5.42368 11.9896 6.42605 11.1659 7.2497C10.3423 8.07335 9.33991 8.48518 8.15883 8.48518ZM0 15.1754V14.3129C0 13.6757 0.151521 13.1007 0.454563 12.5879C0.757605 12.0751 1.16555 11.6865 1.67839 11.4224C2.70407 10.894 3.76083 10.4977 4.84867 10.2335C5.93652 9.96931 7.0399 9.83721 8.15883 9.83721C9.27775 9.83721 10.3811 9.96931 11.469 10.2335C12.5568 10.4977 13.6136 10.894 14.6393 11.4224C15.1521 11.6865 15.56 12.0751 15.8631 12.5879C16.1661 13.1007 16.3177 13.6757 16.3177 14.3129V15.1754C16.3177 15.8747 16.0807 16.4614 15.6067 16.9354C15.1327 17.4094 14.546 17.6464 13.8467 17.6464H2.47096C1.77163 17.6464 1.18497 17.4094 0.710983 16.9354C0.236994 16.4614 0 15.8747 0 15.1754Z" fill="white"/>
</svg>

          </div>
          <div className=" my-auto w-10 h-10 rounded rounded-xl flex justify-center items-center bg-[#F0F4F6]">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.924731 11.0968C0.662724 11.0968 0.4431 11.0082 0.26586 10.8309C0.0886201 10.6537 0 10.4341 0 10.172C0 9.91004 0.0886201 9.69041 0.26586 9.51317C0.4431 9.33593 0.662724 9.24731 0.924731 9.24731H15.7204C15.9824 9.24731 16.2021 9.33593 16.3793 9.51317C16.5565 9.69041 16.6452 9.91004 16.6452 10.172C16.6452 10.4341 16.5565 10.6537 16.3793 10.8309C16.2021 11.0082 15.9824 11.0968 15.7204 11.0968H0.924731ZM0.924731 6.47312C0.662724 6.47312 0.4431 6.3845 0.26586 6.20726C0.0886201 6.03002 0 5.81039 0 5.54839C0 5.28638 0.0886201 5.06676 0.26586 4.88952C0.4431 4.71228 0.662724 4.62366 0.924731 4.62366H15.7204C15.9824 4.62366 16.2021 4.71228 16.3793 4.88952C16.5565 5.06676 16.6452 5.28638 16.6452 5.54839C16.6452 5.81039 16.5565 6.03002 16.3793 6.20726C16.2021 6.3845 15.9824 6.47312 15.7204 6.47312H0.924731ZM0.924731 1.84946C0.662724 1.84946 0.4431 1.76084 0.26586 1.5836C0.0886201 1.40636 0 1.18674 0 0.924731C0 0.662724 0.0886201 0.4431 0.26586 0.26586C0.4431 0.0886201 0.662724 0 0.924731 0H15.7204C15.9824 0 16.2021 0.0886201 16.3793 0.26586C16.5565 0.4431 16.6452 0.662724 16.6452 0.924731C16.6452 1.18674 16.5565 1.40636 16.3793 1.5836C16.2021 1.76084 15.9824 1.84946 15.7204 1.84946H0.924731Z" fill="#0139AE"/>
</svg>

          </div>
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
              <span className="block border-l-2 border-t-2 border-white w-2.5 h-2.5 -rotate-45 ml-1"></span>
            </label>
            <label htmlFor="s1" className="hidden peer-checked/s2:flex absolute left-0 translate-x-[-50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-l-2 border-t-2 border-white w-2.5 h-2.5 -rotate-45 ml-1"></span>
            </label>
            <label htmlFor="s2" className="hidden peer-checked/s3:flex absolute left-0 translate-x-[-50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-l-2 border-t-2 border-white w-2.5 h-2.5 -rotate-45 ml-1"></span>
            </label>

            {/* Кнопки Вперед */}
            <label htmlFor="s2" className="hidden peer-checked/s1:flex absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-r-2 border-t-2 border-white w-2.5 h-2.5 rotate-45 mr-1"></span>
            </label>
            <label htmlFor="s3" className="hidden peer-checked/s2:flex absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-r-2 border-t-2 border-white w-2.5 h-2.5 rotate-45 mr-1"></span>
            </label>
            <label htmlFor="s1" className="hidden peer-checked/s3:flex absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center cursor-pointer bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/20 transition z-10">
              <span className="block border-r-2 border-t-2 border-white w-2.5 h-2.5 rotate-45 mr-1"></span>
            </label>
          </div>

          {/* Индикаторы (Точки) */}
          <div className="flex justify-center gap-2 mt-4 group">
            <label htmlFor="s1" className="w-3 h-3 rounded-full cursor-pointer transition bg-gray-300 hover:bg-gray-400 group-has-[#s1:checked]:bg-blue-600"></label>
            <label htmlFor="s2" className="w-3 h-3 rounded-full cursor-pointer transition bg-gray-300 hover:bg-gray-400 group-has-[#s2:checked]:bg-blue-600"></label>
            <label htmlFor="s3" className="w-3 h-3 rounded-full cursor-pointer transition bg-gray-300 hover:bg-gray-400 group-has-[#s3:checked]:bg-blue-600"></label>
          </div>
        </div>

    

      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-3 font-gilroy font-bold">
          
          {/* ЛЕВАЯ КОЛОНКА: Первый блок - вся высота */}
          <div className="lg:row-span-2">
            <div className="h-full ">
              {/* web */}
              <div className="text-white rounded rounded-2xl overflow-hidden bg-bottom bg-cover bg-no-repeat"
              style={{
      backgroundImage: `url(${process.env.GITHUB_ACTIONS ===
  "true" ? "/est-team-lp" : ""}/verstka-dsk-school/laptop.png),
  linear-gradient(266.35deg, #061122 9.01%, #0A1D36 99.03%)`,
    }}>
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
              <div className="bg-white/10 border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] rounded rounded-2xl overflow-hidden ">
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
              <div className="bg-white/10 border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.25)] rounded rounded-2xl overflow-hidden ">
                <input type="checkbox" id="free-toggle" className="peer hidden" />
                <label htmlFor="free-toggle" className="lg:pointer-events-none gap-1 cursor-pointer font-bold flex px-4 py-5 items-center text-xl uppercase">
                  <div className="lg:hidden w-10 flex items-center justify-center h-full my-auto">
                    <img className="w-9" src={'./play-circle.png'} />
                  </div>
                  <div className="w-6/12 lg:p-4 lg:pt-0 lg:h-14 lg:text-3xl text-[#0039AE]">Бесплатное обучение</div>
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
              <div className="text-white rounded rounded-2xl overflow-hidden bg-[url('/verstka-dsk-school/laptop.png'),_linear-gradient(266.35deg,_#061122_9.01%,_#0A1D36_99.03%)] bg-bottom bg-cover bg-no-repeat">
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
            <div className="bg-red-100 my-auto w-10 h-10 rounded rounded-md flex justify-center items-center">btn1</div>
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
            <div className="bg-red-100 my-auto w-10 h-10 rounded rounded-md flex justify-center items-center">btn1</div>
            <div className="my-auto">Мои курсы</div>
          </div>
          <div className="flex flex-row my-auto gap-2">
            <div className="bg-red-100 my-auto w-10 h-10 rounded rounded-md flex justify-center items-center">btn1</div>
            <div className="my-auto">Мои курсы</div>
          </div>
        </div>

        {/* courses */}
        <div className="flex flex-row gap-4">
          <h2 className="text-2xl w-48">Ближайшие курсы</h2>
          <div className="ml-auto">фильтры</div>
        </div>
        {/* all courses */}
        <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-4xl shadow-lg">
          {/* single */}
          <div className="flex flex-col h-48 bg-gray-100 rounded-xl">
            <div>img</div>
          </div>
          <div className="flex flex-col text-center ">
            <div className="mb-2 uppercase">Москва</div>
            <div className="uppercase">Иван</div>
            <div className="uppercase">Клинические ... </div>
            <div className="mt-2 bg-red-100 text-center rounded rounded-lg py-2 w-48 mx-auto ">Подробнее</div>
          </div>
        </div>

        <div className="mt-2 bg-red-100 rounded rounded-lg py-2 w-48 mx-auto text-center">Показать еще</div>

        {/* faq */}
        <div className="flex flex-col bg-red-100 gap-4">
          <h2 className="text-2xl w-48 text-center mx-auto">Популярные вопросы</h2>
          {/* faq-quest */}
          <div className="flex flex-col gap-3 uppercase">
            <div className="flex flex-row rounded rounded-2xl
            block border-l-2 border-t-2 border-white px-4 py-2">
              <div>Для кого ...</div>
              <div className="ml-auto">v</div>
            </div>
            <div className="flex flex-row rounded rounded-2xl
            block border-l-2 border-t-2 border-white px-4 py-2">
              <div>Для кого ...</div>
              <div className="ml-auto">v</div>
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
              <div className="mt-2 bg-red-100 text-center rounded rounded-lg py-2 w-48 mx-auto ">Записаться</div>
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
            <div className="mt-2 bg-red-100 text-center rounded rounded-lg py-2 w-48 mx-auto ">Подробнее</div>
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
                  <div className="mt-2 bg-red-100 text-center rounded rounded-lg py-2 w-48   ml-auto">Записаться</div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="mt-2 bg-red-100 rounded rounded-lg py-2 w-48 mx-auto text-center">Показать еще</div>

        {/* faq */}
        <div className="flex flex-col bg-red-100 gap-4">
          <h2 className="text-2xl w-48 text-center mx-auto">Популярные вопросы</h2>
          {/* faq-quest */}
          <div className="flex flex-col gap-3 uppercase">
            <div className="flex flex-row rounded rounded-2xl
            block border-l-2 border-t-2 border-white px-4 py-2">
              <div>Для кого ...</div>
              <div className="ml-auto">v</div>
            </div>
            <div className="flex flex-row rounded rounded-2xl
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
