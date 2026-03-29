export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-4xl mx-auto space-y-4">
        <header>
          <h2 className="text-xl font-bold text-slate-900">タスク詳細・報告画面</h2>
          <p className="text-sm text-slate-500">Task ID: {id}</p>
        </header>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 space-y-4">
          <div>
            <p className="text-xs text-slate-500">Task title</p>
            <p className="font-semibold text-slate-800">要件定義書のレビュー</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Description</p>
            <p className="text-sm text-slate-700">
              報連相フォーマットに沿って、目的・進捗・課題・次アクションを記載してください。
            </p>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="font-bold text-slate-800 mb-3">報連相・進捗報告 (Hō-Ren-Sō)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-slate-200 p-3">報告: 本日の進捗 70%</div>
            <div className="rounded-lg border border-slate-200 p-3">連絡: レビュー会議 15:00</div>
            <div className="rounded-lg border border-slate-200 p-3 md:col-span-2">相談: API仕様の境界値の定義を確認したいです。</div>
          </div>
        </section>
      </div>
    </main>
  );
}
