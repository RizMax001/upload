import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Uploader Rizky Max</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">🚀 Rizky Max Uploader</h1>
          <p className="text-gray-600 mb-6">Upload foto, musik, video, dokumen & langsung jadi URL publik!</p>

          <form
            action="/api/upload"
            method="post"
            encType="multipart/form-data"
            className="flex flex-col items-center gap-4"
          >
            <input
              type="file"
              name="file"
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0 file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition"
            >
              Upload Sekarang
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-400">
            Dibuat oleh <span className="font-semibold text-indigo-500">Rizky Max</span>
          </div>
        </div>
      </div>
    </>
  );
}
