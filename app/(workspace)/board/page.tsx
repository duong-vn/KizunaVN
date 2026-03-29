const posts = [
  { title: "4/30〜5/1 休業のお知らせ", author: "Admin", date: "2026-04-20" },
  { title: "社内交流イベントのお知らせ", author: "HR", date: "2026-04-18" },
  { title: "新しいWiki記事を公開しました", author: "Content Team", date: "2026-04-17" },
];

export default function BoardPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">掲示板（コミュニティ）画面</h2>
          <p className="text-sm text-slate-500">Màn hình Bảng tin Cộng đồng</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
          {posts.map((post) => (
            <div key={post.title} className="p-5 hover:bg-slate-50 transition-colors">
              <h3 className="font-semibold text-slate-800">{post.title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                {post.author} • {post.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
