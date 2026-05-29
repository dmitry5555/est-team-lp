import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-7xl px-4 md:px-14 mx-auto flex flex-col mb-12 py-12">
  
      <div className="flex flex-col w-full mx-auto gap-5">

        {/* main */}
        <h1 className="text-h1 md:text-6xl! t-blue">Доставка</h1>
        <div className="text-main gap-2 flex flex-col t-gray">
          <div>Доставка товаров, приобретенных на сайте ДСК-мед осуществляется из офиса компании г. Москва</div>
          <div>Для наших клиентов доступны следующие условия доставок по России:</div>
        </div>

        {/* location */}
        <div className="flex flex-col md:flex-row gap-6 mt-1.5">
          <div className="lg:w-1/2 w-full bg-blue-50 border-1 border-[rgba(0,57,174,0.4)] flex flex-col rounded-xl md:rounded-3xl overflow-visible">
            <div className="min-h-65 h-70 bg-red-300 relative overflow-hidden rounded-t-xl md:rounded-t-3xl">
              <Image  src={'/image339.png'} fill className="object-cover" alt='' />
            </div>
            
            <div className="gap-5 flex flex-col px-4 md:px-5.5 py-6 md:py-8 rounded-xl md:rounded-3xl border-t-1 bg-white border-white -mt-5 relative">
              <div className="text-h2 md:text-5xl mb-1 t-dark">Москва</div>
              
              {/* info 1 */}
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex text-sm1 border-b pb-1.5 border-[rgba(44,44,50,0.6)]">
                  <div className="t-gray">По городу</div>
                  <div className="font-semibold! justify-end ml-auto t-blue">1 день</div>
                </div>
                {/* 2/3 */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="">
                    <div className="text-main t-blue font-semibold!">300 ₽</div>
                    <div className="text-sm2 t-dark">Стоимость доставки</div>
                  </div>
                  <div className="">
                    <div className="font-semibold! text-main t-blue">от 3 000 ₽</div>
                    <div className="text-sm2 t-dark">Бесплатная доставка</div>
                  </div>
                  <div className="">
                    <div className="text-main t-blue font-semibold!">09:00 - 18:00</div>
                    <div className="text-sm2 t-dark">График работы: Пн–Пт</div>
                  </div>
                </div>
              </div>
              
              {/* info 2 */}
              <div className="flex flex-col gap-3 mb-1 ">
                <div className="flex text-sm1 border-b pb-1.5 border-[rgba(44,44,50,0.6)]">
                  <div className="t-gray">Самовывоз</div>
                  <div className="justify-end ml-auto relative group">
                    <div className="" >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5ZM9 11.0156C9.75288 11.0156 10.3506 11.6677 10.3506 12.458C10.3505 13.2621 9.75282 13.8994 9 13.8994C8.24736 13.8992 7.65049 13.262 7.65039 12.458C7.65039 11.6678 8.2473 11.0159 9 11.0156ZM10.3242 6.77246L9.89648 10.1699H8.10449L7.67676 6.77246V4H10.3242V6.77246Z" fill="#2C2C32" fillOpacity="0.4"/>
</svg>

                    </div>
                    {/* tooltip */}
                    <div
                      className="absolute top-full right-0 mr-7 hidden group-hover:block w-70 border-1 rounded-xl border-[rgba(0,57,174,1)] px-2.5 py-3.5 bg-white -mt-8" 
                    >
                      <ul className="list-disc z-10 pl-5 gap-2 flex flex-col">
                        <li>Забрать после подтверждения готовности менеджером</li>
                        <li>За 30-60 мин до визита позвонить для пропуска</li>
                        <li>Бесплатная парковка для легковых, грузовых, велосипедов, самокатов</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col text-lg ">
                    <div className="text-main t-blue font-semibold!">Ленинградский проспект, д. 80б, корп. 2</div>
                    <div className="text-sm2 t-dark">Офис в Москве </div>
                  </div>
                  <div className="flex flex-col text-lg">
                    <div className="text-main t-blue font-semibold!">12:00 - 18:00</div>
                    <div className="text-sm2 t-dark">График работы: Пн–Пт</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>




      {/* tk */}
      <div className="flex flex-col gap-4 my-12 md:my-18">
        <h2 className="md:text-3xl! text-h2 t-blue">Работа с Транспортными команиями</h2>

        <div className="flex flex-col md:flex-row gap-8 my-4">
          
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row gap-4 ">
              <div className="my-auto">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19.5" stroke="#2C2C32" strokeOpacity="0.2"/>
<path d="M22.9156 11.9101C23.1109 11.9961 23.271 12.1796 23.3257 12.375C23.3492 12.457 23.3648 12.9961 23.3648 13.6601V14.8046H24.3726C26.0132 14.8046 25.8921 14.7421 27.6265 16.4804C28.9976 17.8554 29.0757 17.9492 29.2085 18.4218C29.271 18.625 29.2788 18.9414 29.2945 21.164C29.3062 23.039 29.3218 23.6796 29.3531 23.6914C29.3804 23.6992 29.4468 23.7148 29.5093 23.7265C29.6617 23.7617 29.9156 24.0039 29.9702 24.1679C29.9937 24.2421 30.0054 24.4179 29.9976 24.5586C29.982 24.7968 29.9702 24.8242 29.8218 24.9609C29.7359 25.0429 29.5952 25.1289 29.5132 25.1523C29.4273 25.1757 29.021 25.1953 28.5952 25.1953C27.7359 25.1953 27.7788 25.1796 27.7788 25.4804C27.7788 25.8398 27.5718 26.4531 27.3374 26.7968C26.7632 27.6406 25.9624 28.1054 24.9859 28.1523C23.689 28.2187 22.5523 27.5117 22.064 26.3281C21.9429 26.039 21.8413 25.6054 21.8413 25.3593V25.1953H19.6343H17.4273V25.3515C17.4273 25.5859 17.3179 26.082 17.2046 26.3437C16.9156 27.0351 16.2945 27.6562 15.607 27.9414C15.0093 28.1914 14.1656 28.2304 13.5523 28.0351C12.5992 27.7304 11.8257 26.9296 11.5679 25.9765C11.5406 25.8789 11.5093 25.6679 11.4937 25.5078L11.4702 25.2148L10.982 25.1953C10.4507 25.1718 10.3452 25.1367 10.1421 24.9218L10.0249 24.8007L10.0132 18.5781L10.0054 12.3593L10.1187 12.1836C10.1929 12.0625 10.2906 11.9765 10.4038 11.9179L10.5757 11.8359H16.6695C22.4937 11.8359 22.7671 11.8398 22.9156 11.9101ZM23.3648 17.7929V19.2578H25.5757H27.7906L27.7671 19.0156L27.7476 18.7773L26.521 17.5507L25.2984 16.3281H24.3335H23.3648V17.7929ZM24.521 23.7695C24.1304 23.832 23.6968 24.1836 23.4937 24.5976C23.3999 24.7968 23.3843 24.8671 23.3843 25.1757C23.3843 25.4804 23.3999 25.5586 23.4937 25.7656C23.6343 26.0664 23.9351 26.3671 24.2437 26.5117C24.4468 26.6054 24.5249 26.6211 24.8296 26.6211C25.1382 26.6211 25.2085 26.6054 25.4077 26.5117C26.146 26.1484 26.4624 25.3164 26.1421 24.5898C25.9702 24.1953 25.4859 23.8242 25.0562 23.75C24.8687 23.7187 24.814 23.7226 24.521 23.7695ZM13.9195 23.8359C13.6538 23.9336 13.2984 24.2656 13.1577 24.539C12.5523 25.7304 13.8179 27.0664 15.0249 26.5117C15.3335 26.3671 15.6343 26.0703 15.7749 25.7656C15.8687 25.5586 15.8843 25.4804 15.8843 25.1757C15.8843 24.7461 15.7827 24.4961 15.4859 24.1914C15.0562 23.75 14.4976 23.625 13.9195 23.8359Z" fill="#2C2C32" fillOpacity="0.4"/>
</svg>
              </div>
              <div className="text-sm1 md:text-xl! t-dark my-auto">Осуществляем доставку через ведущие ТК</div>
            </div>
            <div className="flex flex-row gap-4 ">
              <div className="my-auto">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19.5" stroke="#2C2C32" strokeOpacity="0.2"/>
<path d="M21.1255 19.5414V16.8539C21.1255 16.5484 21.0178 16.2879 20.8026 16.0727C20.5873 15.8574 20.3269 15.7498 20.0213 15.7498C19.7158 15.7498 19.4553 15.8574 19.2401 16.0727C19.0248 16.2879 18.9172 16.5484 18.9172 16.8539V19.9998C18.9172 20.1525 18.9449 20.2959 19.0005 20.4298C19.056 20.5638 19.1394 20.6843 19.2505 20.7914L21.8547 23.3956C22.063 23.6039 22.3165 23.7116 22.6151 23.7185C22.9137 23.7254 23.1741 23.6178 23.3963 23.3956C23.6047 23.1873 23.7123 22.9303 23.7192 22.6248C23.7262 22.3192 23.6255 22.0623 23.4172 21.8539L21.1255 19.5414ZM20.0005 28.9998C18.7555 28.9998 17.5855 28.7635 16.4905 28.291C15.3955 27.8185 14.443 27.1773 13.633 26.3673C12.823 25.5573 12.1817 24.6048 11.7092 23.5098C11.2367 22.4148 11.0005 21.2448 11.0005 19.9998C11.0005 18.7511 11.2372 17.5778 11.7105 16.4798C12.1838 15.3816 12.8262 14.4264 13.6376 13.6141C14.449 12.8018 15.4015 12.163 16.4951 11.6977C17.5887 11.2324 18.7572 10.9998 20.0005 10.9998C21.249 10.9998 22.4222 11.2324 23.5201 11.6977C24.6181 12.163 25.5734 12.8018 26.3859 13.6143C27.1984 14.4268 27.8373 15.3823 28.3026 16.4806C28.7678 17.5791 29.0005 18.7527 29.0005 20.0014C29.0005 21.2503 28.7678 22.4199 28.3026 23.5102C27.8373 24.6004 27.1985 25.5513 26.3861 26.3627C25.5739 27.1741 24.6187 27.8164 23.5205 28.2898C22.4224 28.7631 21.2491 28.9998 20.0005 28.9998Z" fill="#2C2C32" fillOpacity="0.4"/>
</svg>

              </div>
              <div className="text-sm1 md:text-xl!  t-dark my-auto">Точные сроки и стоимость доставки зависят от условий конкретной ТК</div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="my-auto">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19.5" stroke="#2C2C32" strokeOpacity="0.2"/>
<path d="M17.3572 10.0695C16.994 10.1763 16.7407 10.3441 16.4588 10.6747C16.1195 11.0663 16 11.4121 16 11.997C16 12.6378 16.1243 12.9582 16.54 13.4006C16.7694 13.6447 16.9319 13.7668 17.1422 13.8583L17.4289 13.9804L19.8184 13.9956C22.3274 14.0109 22.595 13.9956 22.9725 13.7922C23.6129 13.4413 24 12.77 24 11.997C24 11.1578 23.546 10.4458 22.8053 10.1254C22.5472 10.0136 22.509 10.0136 20.0812 10.0034C18.0263 9.99322 17.5771 10.0034 17.3572 10.0695Z" fill="#2C2C32" fillOpacity="0.4"/>
<path d="M14.0798 12.1929C13.0416 12.7482 12.3113 13.76 12.0737 14.9647C11.9725 15.4824 11.9769 26.1553 12.0781 26.7341C12.3465 28.2682 13.4199 29.4824 14.8673 29.8918L15.2413 30H20.0366H24.8319L25.2059 29.8918C26.2837 29.5765 27.1416 28.8282 27.6255 27.7882C28.0303 26.9082 27.9995 27.4824 27.9995 20.8941V15.0824L27.8763 14.6588C27.5947 13.7082 27.036 12.9129 26.2705 12.3906C26.0637 12.2447 25.5974 12 25.5358 12C25.5226 12 25.5138 12.0612 25.5138 12.1318C25.5138 12.3906 25.3378 13.0165 25.1443 13.4353C24.6955 14.4141 23.864 15.1388 22.8478 15.4447C22.509 15.5482 22.4519 15.5482 20.0366 15.5482C17.6257 15.5482 17.5641 15.5482 17.221 15.4447C15.8088 15.0259 14.7925 13.84 14.5594 12.3388C14.533 12.1553 14.4934 12 14.4714 12C14.4538 12 14.2778 12.0847 14.0798 12.1929ZM24.37 18.4094C24.7791 18.6776 24.9287 19.1906 24.7219 19.6424C24.6647 19.7694 23.7761 20.7529 22.0735 22.5694C19.8738 24.9176 19.4779 25.3176 19.3019 25.3882C19.0335 25.4918 18.7696 25.4541 18.5144 25.2706C18.2021 25.0494 15.3645 21.9765 15.2853 21.7788C15.1445 21.4118 15.2325 20.9271 15.492 20.6776C15.7648 20.4094 16.1959 20.3294 16.4951 20.4941C16.5787 20.5365 17.177 21.1388 17.8237 21.8259L19.0027 23.0824L21.1672 20.7671C22.8082 19.0165 23.3845 18.4282 23.5341 18.3576C23.8333 18.2118 24.084 18.2306 24.37 18.4094Z" fill="#2C2C32" fillOpacity="0.4"/>
</svg>
</div>
              <div className="text-sm1 md:text-xl!  t-dark my-auto">Менеджер поможет подобрать лучший вариант отправки</div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-x-20 gap-y-12 items-center w-full">
            <Image src={'3.png'} alt='' width={150} height={100} unoptimized />
            <Image src={'/1.png'} alt='' width={150} height={100} />
            <Image src={'/2.png'} alt='' width={150} height={100} />
          </div>

        </div>

      </div>

      {/* dop */}
      <div className="flex flex-col gap-6">
        <h2 className="text-h2 md:text-3xl! t-blue">Дополнительно</h2>

        <div className="flex flex-col md:flex-row gap-5">
          {/* 1 */}
          <div className="flex md:flex-col w-full md:w-1/3 bg-blue1 rounded-xl md:rounded-3xl py-4 px-4 md:px-5.5 md:py-6 gap-4">
            <div className="shrink-0 rounded-full bg-[rgba(0,57,174,1)] h-10 w-10 flex justify-center items-center">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3746 17.9455V9.52639L0 5.30637V12.4512C0 12.8551 0.0974923 13.2276 0.292477 13.5688C0.487461 13.9101 0.759047 14.1782 1.10723 14.3731L7.3746 17.9455ZM9.04589 17.9247L15.2506 14.3731C15.5988 14.1782 15.8704 13.9101 16.0653 13.5688C16.2603 13.2276 16.3578 12.8551 16.3578 12.4512V5.28547L9.04589 9.46371V17.9247ZM12.8063 5.38993L15.5013 3.86487L9.27569 0.292477C8.94144 0.0974923 8.57932 0 8.18935 0C7.79938 0 7.43031 0.0974923 7.08212 0.292477L5.49439 1.1908L12.8063 5.38993ZM8.14757 8.04311L11.1141 6.35093L3.84398 2.15179L0.856539 3.86487L8.14757 8.04311Z" fill="white"/>
</svg>

            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="text-main t-dark font-semibold!">Удобство и надежность</div>
              <div className="text-sm1 t-gray">Обрабатываем заказы сразу после поступления</div>
              <div className="text-sm1 t-gray">Свяжемся с вами, чтобы уточнить детали и подтвердить доставку</div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex md:flex-col w-full md:w-1/3 bg-blue1 rounded-xl md:rounded-3xl py-4 px-4 md:px-5.5 md:py-6 gap-4">
            <div className="shrink-0 rounded-full bg-[rgba(0,57,174,1)] h-10 w-10 flex justify-center items-center">
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.2533 4.25329 0 9.5 0C14.7467 0 19 4.2533 19 9.5ZM10.3082 10.4748C10.5101 10.2728 10.6111 10.0223 10.6111 9.7232V5.50098C10.6111 5.2019 10.5098 4.95138 10.3071 4.74942C10.1044 4.54746 9.85393 4.44612 9.55556 4.44542C9.25718 4.44472 9.00667 4.54605 8.804 4.74942C8.60133 4.95279 8.5 5.20331 8.5 5.50098V9.7232C8.5 10.0223 8.60133 10.2731 8.804 10.4758C9.00667 10.6785 9.25718 10.7795 9.55556 10.7788C9.85393 10.778 10.1048 10.6767 10.3082 10.4748ZM10.3082 14.697C10.1055 14.8996 9.85463 15.001 9.55556 15.001C9.25789 15.0024 9.00737 14.9014 8.804 14.698C8.60063 14.4947 8.4993 14.2438 8.5 13.9454C8.5007 13.647 8.60204 13.3965 8.804 13.1939C9.00596 12.9912 9.25648 12.8899 9.55556 12.8899C9.85463 12.8899 10.1051 12.9912 10.3071 13.1939C10.5091 13.3965 10.6104 13.647 10.6111 13.9454C10.6118 14.2438 10.5108 14.4943 10.3082 14.697Z" fill="white"/>
</svg>


            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="text-main t-dark font-semibold!">Важные моменты</div>
              <div className="text-sm1 t-gray">Получатель сам компенсирует платный въезд или офромляет пропуск на охраняемую территорию</div>
              <div className="text-sm1 t-gray">В иных ситуациях доставка выполняется до доступного места</div>
            </div>
          </div>

          {/* 3 */}
          <div className="flex md:flex-col w-full md:w-1/3 bg-blue1 rounded-xl md:rounded-3xl py-4 px-4 md:px-5.5 md:py-6 gap-4">
            <div className="shrink-0 rounded-full bg-[rgba(0,57,174,1)] h-10 w-10 flex justify-center items-center">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 1.58333V7.125C19 7.33941 18.9217 7.52496 18.765 7.68164C18.6083 7.83833 18.4227 7.91667 18.2083 7.91667H12.6667C12.3203 7.91667 12.077 7.75174 11.9368 7.42188C11.7967 7.10026 11.8544 6.81576 12.11 6.56836L13.8171 4.86133C12.5966 3.73155 11.1576 3.16667 9.5 3.16667C8.64236 3.16667 7.82389 3.33366 7.0446 3.66764C6.2653 4.00163 5.59115 4.45312 5.02214 5.02214C4.45312 5.59115 4.00163 6.2653 3.66764 7.0446C3.33366 7.82389 3.16667 8.64236 3.16667 9.5C3.16667 10.3576 3.33366 11.1761 3.66764 11.9554C4.00163 12.7347 4.45312 13.4089 5.02214 13.9779C5.59115 14.5469 6.2653 14.9984 7.0446 15.3324C7.82389 15.6663 8.64236 15.8333 9.5 15.8333C10.4813 15.8333 11.4091 15.6189 12.2832 15.1901C12.6512 15.0096 13.2157 14.5731 13.7151 14.1571C14.3255 13.6486 15.2279 13.6589 15.7963 14.2141C16.401 14.8047 16.3948 15.779 15.7658 16.3436C14.9765 17.0521 13.9901 17.895 13.5449 18.1032C12.2667 18.7011 10.9184 19 9.5 19C8.21354 19 6.98481 18.7485 5.8138 18.2454C4.6428 17.7424 3.6326 17.0662 2.7832 16.2168C1.93381 15.3674 1.2576 14.3572 0.754557 13.1862C0.251519 12.0152 0 10.7865 0 9.5C0 8.21354 0.251519 6.98481 0.754557 5.8138C1.2576 4.6428 1.93381 3.6326 2.7832 2.7832C3.6326 1.93381 4.6428 1.2576 5.8138 0.754557C6.98481 0.251519 8.21354 0 9.5 0C10.7122 0 11.8853 0.228841 13.0192 0.686523C14.1531 1.14421 15.1612 1.7895 16.0436 2.6224L17.6517 1.02669C17.8908 0.77105 18.1795 0.713325 18.5176 0.853516C18.8392 0.993707 19 1.23698 19 1.58333Z" fill="white"/>
              </svg>


            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="text-main t-dark font-semibold!">Повторная доставка</div>
              <div className="text-sm1 t-gray">Если доставка не состоялась по вине получателя, повторный выезд оплачивается отдельно</div>
            </div>
          </div>

        </div>
      </div>

      {/* form-div */}
      <div className="mt-16 flex flex-col md:flex-row w-full gap-4 md:gap-16 px-4 md:px-5.5 py-8 rounded-xl md:rounded-3xl border-t-1 border-white bg-blue1">
        {/* quest */}
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-h2 t-blue font-medium!">Остались вопросы? </h2>
          <div className="text-h2 text-[32px]! md:text-[48px]! t-blue">Наши менеджеры всегда на связи, чтобы помочь вам</div>
          <div className="flex flex-row gap-4 mb-5 mt-2 md:mt-auto md:mb-0">
            <div className="">
                <div className="shadow-[0px_2.32px_4.64px_0px_rgba(0,57,174,0.25)] rounded-full bg-white h-9 w-9 flex justify-center items-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9125 14.7C12.1625 14.7 10.45 14.3375 8.775 13.6125C7.1 12.8875 5.58125 11.8438 4.21875 10.4813C2.85625 9.13125 1.8125 7.61563 1.0875 5.93438C0.3625 4.25313 0 2.5375 0 0.7875C0 0.5375 0.06875 0.34375 0.20625 0.20625C0.34375 0.06875 0.5375 0 0.7875 0H4.5375C4.7125 0 4.87188 0.059375 5.01562 0.178125C5.15938 0.296875 5.25 0.4375 5.2875 0.6L5.85 3.7875C5.875 3.9625 5.86875 4.11875 5.83125 4.25625C5.79375 4.39375 5.7375 4.5 5.6625 4.575L3.675 6.6C3.9125 7.025 4.19375 7.44063 4.51875 7.84688C4.84375 8.25313 5.2125 8.6625 5.625 9.075C6 9.4375 6.38125 9.775 6.76875 10.0875C7.15625 10.4 7.55 10.675 7.95 10.9125L10.0125 8.925C10.1125 8.825 10.225 8.75625 10.35 8.71875C10.475 8.68125 10.6 8.675 10.725 8.7L14.0625 9.4125C14.2375 9.4625 14.3875 9.55313 14.5125 9.68438C14.6375 9.81563 14.7 9.9625 14.7 10.125V13.9125C14.7 14.1625 14.6313 14.3563 14.4938 14.4938C14.3563 14.6313 14.1625 14.7 13.9125 14.7Z" fill="#0039AE"/>
</svg>
</div>   
            </div>
            <div className="text-main font-semibold! hover:cursor-pointer hover:text-[rgba(0,57,174,1)] my-auto">8 (800) 234-59-56</div>
          </div>
        </div>
        {/* form */}
        <div className="w-full flex flex-col md:flex-row gap-4 rounded-2xl border-t-1 border-white overflow-hidden bg-white px-4 md:px-6 py-5 shadow-[0px_2.32px_4.64px_0px_rgba(0,57,174,0.25)]">
          {/* 1 */}

              <form className="group flex flex-col w-full gap-4">

                <div className="text-sm t-dark">Задайте вопрос или опишите вашу проблему.</div>

                <div className="relative">
                  <input
                    type="text"
                    pattern="[\+\d\s\-\(\)]{10,18}"
                    placeholder=" "
                    className="peer px-4 py-5 pt-6 w-full border-[rgba(187,188,188,0.3)] border rounded-xl hover:border-[rgba(187,188,188,1)] focus:border-[rgba(44,44,50,1)] focus:outline-none hover:cursor-pointer font-semibold! text-sm1"
                    required
                  />

                  <label
                    className="
                      pointer-events-none
                      absolute left-4 text-[rgba(187,188,188,1)]
                      transition-all duration-200

                      top-2 text-[12px]

                      peer-placeholder-shown:top-1/2
                      peer-placeholder-shown:-translate-y-1/2
                      peer-placeholder-shown:text-base

                      peer-focus:top-2
                      peer-focus:translate-y-0
                      peer-focus:text-[12px]
                    "
                  >
                    Телефон
                  </label>
                </div>

              {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder=" "
                    className="peer px-4 py-5 pt-6 w-full border-[rgba(187,188,188,0.3)] border rounded-xl hover:border-[rgba(187,188,188,1)] focus:border-[rgba(44,44,50,1)] focus:outline-none hover:cursor-pointer text-sm1"
                  />
                  <label className="pointer-events-none absolute left-4 text-[rgba(187,188,188,1)] transition-all duration-200 top-2 text-[12px] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[12px]">
                    Почта для ответа (необязательно)
                  </label>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    placeholder=" "
                    rows={4}
                    className="peer px-4 py-5 pt-6 w-full border-[rgba(187,188,188,0.3)] border rounded-xl hover:border-[rgba(187,188,188,1)] focus:border-[rgba(44,44,50,1)] focus:outline-none hover:cursor-pointer resize-none text-sm1"
                  />
                  <label className="pointer-events-none absolute left-4 text-[rgba(187,188,188,1)] transition-all duration-200 top-2 text-[12px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-[12px]">
                    Ваш вопрос (необязательно)
                  </label>
                </div>


                <div className="flex flex-col md:flex-row gap-4 mt-1 mb-1.5 ">
                  <button type="submit" className="my-auto self-start flex flex-row gap-2 px-4 py-3 bg-blue2 hover:bg-[rgba(27,84,205,1)] disabled:bg-[rgba(187,188,188,1)] border-white border-1 rounded-xl text-white hover:cursor-pointer group-[:has(input:invalid)]:bg-[rgba(187,188,188,1)] ">
                    <div className="text-sm1 font-semibold!">Отправить</div>
                    <div className="justify-end my-auto">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C7.755 18 6.585 17.7638 5.49 17.2913C4.395 16.8188 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.75139 0.236667 6.57806 0.71 5.48C1.18333 4.38181 1.82569 3.4266 2.63708 2.61437C3.44847 1.80201 4.40097 1.16319 5.49458 0.697917C6.58819 0.232639 7.75667 0 9 0C10.2485 0 11.4217 0.232639 12.5196 0.697917C13.6176 1.16319 14.5729 1.80208 15.3854 2.61458C16.1979 3.42708 16.8368 4.3825 17.3021 5.48083C17.7674 6.57931 18 7.75292 18 9.00167C18 10.2506 17.7674 11.4201 17.3021 12.5104C16.8368 13.6007 16.198 14.5515 15.3856 15.3629C14.5734 16.1743 13.6182 16.8167 12.52 17.29C11.4219 17.7633 10.2486 18 9 18ZM8.52083 10.1042L8.22917 10.3958C8.02083 10.6042 7.91667 10.8611 7.91667 11.1667C7.91667 11.4722 8.02083 11.7292 8.22917 11.9375C8.4375 12.1458 8.69444 12.25 9 12.25C9.30556 12.25 9.5625 12.1458 9.77083 11.9375L11.9375 9.77083C12.1597 9.55111 12.2708 9.29479 12.2708 9.00187C12.2708 8.70896 12.1597 8.45139 11.9375 8.22917L9.77083 6.0625C9.5625 5.85417 9.30556 5.75 9 5.75C8.69444 5.75 8.4375 5.85417 8.22917 6.0625C8.02083 6.27083 7.91667 6.52778 7.91667 6.83333C7.91667 7.13889 8.02083 7.39583 8.22917 7.60417L8.52083 7.89583H6.5C6.19444 7.89583 5.93403 8.00347 5.71875 8.21875C5.50347 8.43403 5.39583 8.69444 5.39583 9C5.39583 9.30556 5.50347 9.56597 5.71875 9.78125C5.93403 9.99653 6.19444 10.1042 6.5 10.1042H8.52083Z" fill="white"/>
</svg>

                    </div>
                  </button>
                  <div className="text-sm2 text-xs! t-gray my-auto">Нажимая на кнопку, вы соглашаетесь <br /> с политикой конфиденциальности</div> 
                </div>           

              </form>
            
      </div>

      </div>

    </div>
  );
}
