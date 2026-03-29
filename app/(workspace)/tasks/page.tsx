import Link from "next/link";

type TaskCard = {
  id: string;
  title: string;
  owner: string;
  due: string;
  horensou?: string;
};

type TaskColumn = {
  title: string;
  status: "todo" | "doing" | "done";
  cards: TaskCard[];
};

const columns: TaskColumn[] = [
  {
    title: "未着手 / To do",
    status: "todo",
    cards: [
      {
        id: "spec-review",
        title: "要件定義書のレビュー",
        owner: "Tanaka",
        due: "Hôm nay",
      },
      {
        id: "weekly-report",
        title: "週次レポートの作成",
        owner: "Nam",
        due: "Ngày mai",
      },
      {
        id: "bug-triage",
        title: "不具合チケットの整理",
        owner: "Hoa",
        due: "Thứ 4",
      },
      {
        id: "mail-draft",
        title: "顧客向けメール下書き",
        owner: "Kaito",
        due: "Thứ 5",
      },
      {
        id: "wiki-update",
        title: "Wiki用語集の更新",
        owner: "Linh",
        due: "Thứ 6",
      },
    ],
  },
  {
    title: "進行中 / Doing",
    status: "doing",
    cards: [
      {
        id: "api-test",
        title: "API結合テスト",
        owner: "Hoa",
        due: "Hôm nay",
        horensou: "報告: API test 70% / 連絡: test env ổn định",
      },
      {
        id: "ui-polish",
        title: "Dashboard UI微調整",
        owner: "Minh",
        due: "Ngày mai",
        horensou: "相談: icon color consistency với design system",
      },
      {
        id: "log-audit",
        title: "翻訳ログ監査",
        owner: "Nam",
        due: "Thứ 5",
        horensou: "報告: đã rà soát 40 bản ghi",
      },
      {
        id: "task-template",
        title: "Task template chuẩn hóa",
        owner: "Tanaka",
        due: "Thứ 5",
        horensou: "連絡: gửi bản nháp cho team review 15:00",
      },
    ],
  },
  {
    title: "完了 / Done",
    status: "done",
    cards: [
      {
        id: "db-migration",
        title: "DB移行スクリプト",
        owner: "Minh",
        due: "Done",
        horensou: "完了報告: migration thành công, không lỗi",
      },
      {
        id: "chat-history",
        title: "履歴検索UI実装",
        owner: "Khanh",
        due: "Done",
        horensou: "完了報告: search response < 300ms",
      },
      {
        id: "permission-map",
        title: "権限マッピング整理",
        owner: "Huy",
        due: "Done",
        horensou: "連絡: tài liệu phân quyền đã bàn giao",
      },
      {
        id: "board-news",
        title: "掲示板新着表示",
        owner: "Linh",
        due: "Done",
        horensou: "完了報告: deploy lên staging lúc 17:10",
      },
    ],
  },
];

export default function TaskBoardPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            タスクボード（一覧）画面
          </h2>
          <p className="text-sm text-slate-500">Màn hình DS Task (Kanban)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {columns.map((col) => (
            <section
              key={col.title}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
            >
              <h3 className="text-sm font-bold text-slate-700 mb-3">
                {col.title}
              </h3>
              <div className="space-y-3">
                {col.cards.map((card) => (
                  <Link
                    key={card.id}
                    href={`/tasks/${card.id}`}
                    className="block rounded-lg border border-slate-100 p-3 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-slate-800">
                        {card.title}
                      </p>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {card.due}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Owner: {card.owner}
                    </p>
                    {(col.status === "doing" || col.status === "done") &&
                      card.horensou && (
                        <p className="text-[11px] text-slate-600 mt-1 rounded-md bg-slate-50 px-2 py-1 border border-slate-200">
                          Hō-Ren-Sō: {card.horensou}
                        </p>
                      )}
                    <div className="mt-2">
                      {col.status === "todo" && (
                        <button
                          type="button"
                          className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
                        >
                          Nhận task
                        </button>
                      )}
                      {col.status === "doing" && (
                        <button
                          type="button"
                          className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
                        >
                          Xong task
                        </button>
                      )}
                      {col.status === "done" && (
                        <span className="rounded-md bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                          Hoàn thành
                        </span>
                      )}
                    </div>
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
