import Link from "next/link";

const columns = [
  {
    title: "未着手 / To do",
    cards: [
      { id: "spec-review", title: "要件定義書のレビュー", owner: "Tanaka" },
      { id: "weekly-report", title: "週次レポートの作成", owner: "Nam" },
    ],
  },
  {
    title: "進行中 / Doing",
    cards: [{ id: "api-test", title: "API結合テスト", owner: "Hoa" }],
  },
  {
    title: "完了 / Done",
    cards: [{ id: "db-migration", title: "DB移行スクリプト", owner: "Minh" }],
  },
];

export default function TaskBoardPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">タスクボード（一覧）画面</h2>
          <p className="text-sm text-slate-500">Màn hình DS Task (Kanban)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {columns.map((col) => (
            <section key={col.title} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-700 mb-3">{col.title}</h3>
              <div className="space-y-3">
                {col.cards.map((card) => (
                  <Link
                    key={card.id}
                    href={`/tasks/${card.id}`}
                    className="block rounded-lg border border-slate-100 p-3 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                  >
                    <p className="text-sm font-medium text-slate-800">{card.title}</p>
                    <p className="text-xs text-slate-500 mt-1">Owner: {card.owner}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
