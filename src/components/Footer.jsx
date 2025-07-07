import React from 'react'

const Footer = () => {
    return (
        <div>


            <footer class="bg-black rounded-lg shadow-sm m-4 dark:bg-stone-200 ">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-black sm:text-center text-black-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">PassMan™</a>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 text-black-400 sm:mt-0">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer
