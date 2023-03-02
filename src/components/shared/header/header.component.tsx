import Link from 'next/link';

import * as styles from './styles';

export function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href="/" className="flex ml-2 md:mr-24">
              <span className="w-8 h-8 mr-3 text-3xl flex justify-center items-center">
                👨‍💻
              </span>
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Supabase App
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-3">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
