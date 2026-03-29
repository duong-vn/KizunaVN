const users = [
  { name: "Tanaka", role: "1 - 日本人スタッフ" },
  { name: "Nguyen Van Nam", role: "2 - ベトナム人スタッフ" },
  { name: "Admin", role: "3 - 管理者" },
];

export default function AdminPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto space-y-5">
        <header>
          <h2 className="text-xl font-bold text-slate-900">管理者設定画面</h2>
          <p className="text-sm text-slate-500">Màn hình Setting Admin (Role ID: 3)</p>
        </header>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-slate-800 mb-3">ユーザー管理 / Quản lý người dùng</h3>
          <div className="space-y-2">
            {users.map((u) => (
              <div
                key={u.name}
                className="flex items-center justify-between border border-slate-100 rounded-lg p-3"
              >
                <span className="text-sm text-slate-800">{u.name}</span>
                <span className="text-xs text-slate-500">{u.role}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-slate-800 mb-2">コンテンツ管理 / Quản lý nội dung</h3>
          <p className="text-sm text-slate-600">
            Phê duyệt bài viết Wiki, quản lý thông báo bảng tin và nhật ký hoạt động hệ thống.
          </p>
        </section>
      </div>
    </main>
  );
}
