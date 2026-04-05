type RoleKey = "staff" | "admin";

type RoleInfo = {
  key: RoleKey;
  ja: string;
  vi: string;
  description: string;
  permissions: string[];
};

type UserRow = {
  name: string;
  team: string;
  role: RoleKey;
  status: "active" | "pending";
};

const roles: RoleInfo[] = [
  {
    key: "staff",
    ja: "日越スタッフ",
    vi: "Nhân viên Nhật - Việt",
    description:
      "Thành viên làm việc hàng ngày trên Chat, Task, Wiki và Bảng tin cộng đồng.",
    permissions: [
      "Chat nội bộ và trao đổi 1-1",
      "Tạo/Cập nhật task cá nhân và theo nhóm",
      "Đọc và đề xuất chỉnh sửa Wiki",
      "Xem thông báo và react trên bảng tin",
    ],
  },
  {
    key: "admin",
    ja: "管理者",
    vi: "Quản trị viên",
    description:
      "Vai trò vận hành hệ thống, quản lý tài khoản, cấu hình quyền và kiểm duyệt nội dung.",
    permissions: [
      "Toàn quyền quản lý user/role",
      "Duyệt và ẩn nội dung Wiki/Bảng tin",
      "Quản lý thông báo hệ thống",
      "Xem nhật ký hoạt động và bảo mật",
    ],
  },
];

const users: UserRow[] = [
  { name: "Tanaka Ken", team: "Operation", role: "staff", status: "active" },
  { name: "Nguyen Van Nam", team: "Content", role: "staff", status: "active" },
  { name: "Sato Miki", team: "HR", role: "staff", status: "pending" },
  { name: "System Admin", team: "Core", role: "admin", status: "active" },
];

const roleLabel = (role: RoleKey) =>
  role === "admin"
    ? "管理者 / Quản trị viên"
    : "日越スタッフ / Nhân viên Nhật - Việt";

export default function AdminPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto space-y-5">
        <header>
          <h2 className="text-xl font-bold text-slate-900">管理者設定画面</h2>
          <p className="text-sm text-slate-500">
            Màn hình Setting Admin, hiện chỉ có 2 role: 日越スタッフ và 管理者.
          </p>
        </header>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-slate-800 mb-3">Role Matrix / 権限ロール</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {roles.map((role) => (
              <article
                key={role.key}
                className="rounded-xl border border-slate-200 p-4 bg-slate-50/40"
              >
                <h4 className="text-sm font-bold text-slate-900">
                  {role.ja} / {role.vi}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{role.description}</p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                  {role.permissions.map((permission) => (
                    <li key={permission}>- {permission}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-slate-800">
              ユーザー管理 / Quản lý người dùng
            </h3>
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
            >
              + Add User
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-slate-500 border-b border-slate-100">
                  <th className="py-2 pr-3 font-medium">Name</th>
                  <th className="py-2 pr-3 font-medium">Team</th>
                  <th className="py-2 pr-3 font-medium">Role</th>
                  <th className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.name} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-3 pr-3 text-slate-800">{u.name}</td>
                    <td className="py-3 pr-3 text-slate-600">{u.team}</td>
                    <td className="py-3 pr-3 text-slate-700">{roleLabel(u.role)}</td>
                    <td className="py-3">
                      <span
                        className={
                          u.status === "active"
                            ? "inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                            : "inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700"
                        }
                      >
                        {u.status === "active" ? "Active" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-slate-800 mb-3">
            システム設定 / Cấu hình hệ thống
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <label className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
              <input type="checkbox" defaultChecked className="mt-0.5" />
              <span>
                <span className="block text-sm font-medium text-slate-800">
                  Yêu cầu xác minh email khi tạo tài khoản
                </span>
                <span className="text-xs text-slate-500">
                  Bắt buộc với cả 2 role: 日越スタッフ và 管理者.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
              <input type="checkbox" defaultChecked className="mt-0.5" />
              <span>
                <span className="block text-sm font-medium text-slate-800">
                  Nhật ký đăng nhập 90 ngày
                </span>
                <span className="text-xs text-slate-500">
                  Theo dõi truy cập để hỗ trợ bảo mật nội bộ.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
              <input type="checkbox" defaultChecked className="mt-0.5" />
              <span>
                <span className="block text-sm font-medium text-slate-800">
                  Duyệt nội dung bảng tin trước khi public
                </span>
                <span className="text-xs text-slate-500">
                  Chỉ 管理者 có quyền publish chính thức.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
              <input type="checkbox" className="mt-0.5" />
              <span>
                <span className="block text-sm font-medium text-slate-800">
                  Bật cảnh báo bảo mật theo thời gian thực
                </span>
                <span className="text-xs text-slate-500">
                  Gửi cảnh báo đến nhóm 管理者 khi phát hiện bất thường.
                </span>
              </span>
            </label>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-slate-800 mb-2">
            コンテンツ管理 / Quản lý nội dung
          </h3>
          <p className="text-sm text-slate-600">
            Thiết lập quy trình duyệt bài Wiki, quản lý thông báo bảng tin, lịch
            xuất bản và nhật ký chỉnh sửa theo từng role.
          </p>
          <div className="mt-3 grid sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
              <div className="text-slate-500">Bài chờ duyệt</div>
              <div className="mt-1 text-lg font-bold text-slate-900">12</div>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
              <div className="text-slate-500">Thông báo đã lên lịch</div>
              <div className="mt-1 text-lg font-bold text-slate-900">5</div>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
              <div className="text-slate-500">Cảnh báo moderation</div>
              <div className="mt-1 text-lg font-bold text-slate-900">2</div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-slate-800 mb-2">
            通知設定 / Cài đặt thông báo
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
            <label className="rounded-lg border border-slate-100 p-3 flex items-center justify-between">
              <span>Email digest hàng ngày</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="rounded-lg border border-slate-100 p-3 flex items-center justify-between">
              <span>Cảnh báo task quá hạn</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="rounded-lg border border-slate-100 p-3 flex items-center justify-between">
              <span>Nhắc review Wiki</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="rounded-lg border border-slate-100 p-3 flex items-center justify-between">
              <span>Thông báo đăng nhập mới</span>
              <input type="checkbox" defaultChecked />
            </label>
          </div>
        </section>
      </div>
    </main>
  );
}
