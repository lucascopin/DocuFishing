import Link from 'next/link';

export default function Home() {
    return (
    <div className={"flex items-center justify-center h-screen"}>
      <div className={"flex-col items-center justify-center border rounded-2xl border-gray-700 pt-6 pb-6 pr-10 pl-10"}>
          <h1>DocuFishing</h1>
          <div className="flex items-center justify-center w-full">
              <div className="text-2xl w-full flex">
                  <Link key={"poissons"}
                      href="/poissons"
                     className="w-1/2 text-center border-r rounded-l-full p-2 hover:border-blue-600 hover:bg-blue-600">
                      Poissons
                  </Link>
                  <Link key={"lacs"}
                      href="/lacs"
                     className="w-1/2 text-center border-l rounded-r-full p-2 hover:border-blue-600 hover:bg-blue-600">
                      Lacs
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
}
