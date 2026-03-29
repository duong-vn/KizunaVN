import Link from "next/link";

const articles = [
  { slug: "ho-ren-so-basic", title: "報連相（ホウレンソウ）の基本", tag: "Business" },
  { slug: "meeting-manner", title: "会議マナー（日越共通）", tag: "Manner" },
  { slug: "email-tone", title: "ビジネスメールの丁寧表現", tag: "Communication" },
];

export default function WikiListPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">文化Wiki記事一覧画面</h2>
          <p className="text-sm text-slate-500">Màn hình DS bài viết Wiki</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/wiki/${item.slug}`}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow"
            >
              <p className="text-xs text-blue-600 font-semibold mb-1">{item.tag}</p>
              <h3 className="font-semibold text-slate-800">{item.title}</h3>
              <p className="text-xs text-slate-500 mt-2">Nhấn để xem chi tiết nội quy/bài viết.</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
