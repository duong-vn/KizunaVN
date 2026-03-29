import { Languages, Sparkles } from "lucide-react";

export default async function ChatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <h2 className="text-xl font-bold text-slate-900">チャット詳細・変換画面</h2>
          <p className="text-sm text-slate-500 mb-5">Room: {id}</p>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-3 max-w-xl">
              <p className="text-sm font-medium text-slate-800">仕様について確認したいことがあります。</p>
              <p className="text-xs text-slate-500 mt-1">Tôi muốn confirm về spec.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 max-w-xl ml-auto">
              <p className="text-sm font-medium text-slate-800">確認しました。15時にレビューしましょう。</p>
              <p className="text-xs text-slate-500 mt-1">Da hieu. Minh review luc 15h nhe.</p>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Languages className="w-4 h-4 text-blue-600" /> AI翻訳
            </h3>
            <p className="text-xs text-slate-500 mt-2">Nhật-Việt tự động theo ngữ cảnh cuộc hội thoại.</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" /> ニュアンス変換
            </h3>
            <p className="text-xs text-slate-500 mt-2">Gợi ý văn phong lịch sự kiểu business Nhật.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
