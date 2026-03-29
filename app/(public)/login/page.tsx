import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-100 to-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
        <h1 className="text-2xl font-bold text-slate-900">KizunaVN Login</h1>
        <p className="text-sm text-slate-500 mt-1">
          Trang đăng nhập (không dùng header/sidebar)
        </p>

        <form className="mt-5 space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <button
            type="button"
            className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            ログイン / Đăng nhập
          </button>
        </form>

        <Link
          href="/"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          Go to dashboard
        </Link>
      </div>
    </main>
  );
}
