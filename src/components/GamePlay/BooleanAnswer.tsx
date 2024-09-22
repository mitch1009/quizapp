<div className="hidden">
    <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Didi you perform the task?</h3>
    <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
            <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="block">
                    <div className="w-full text-lg font-semibold">Yes i did</div>
                    <div className="w-full">Good for small websites</div>
                </div>
                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </label>
        </li>
        <li>
            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
            <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="block">
                    <div className="w-full text-lg font-semibold">No i did not</div>
                    <div className="w-full">Good for large websites</div>
                </div>
                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </label>
        </li>
    </ul>

</div>