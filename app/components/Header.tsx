import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header>
      <div className="bg-red-100 border-b-2 border-red-900 p-5 flex justify-center items-center space-x-6">
        <Link href="/">
          <h2 className="text-3xl font-mono font-semibold text-red-900 hover:underline">
            i18n News Reader
          </h2>
        </Link>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
