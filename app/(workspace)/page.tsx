import { AlertCircle, BookOpen, CheckSquare, Clock, MessageSquare } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-base font-bold flex items-center text-slate-800">
                  <CheckSquare className="w-5 h-5 mr-2 text-blue-600" /> マイタスク
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Task của tôi</p>
              </div>
              <button className="text-sm text-blue-600 hover:underline font-medium">
                すべて見る (Xem tất cả)
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 cursor-pointer transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded mb-1">
                      進行中 / Doing
                    </span>
                    <h3 className="text-sm font-medium text-slate-800">要件定義書のレビュー</h3>
                    <p className="text-xs text-slate-500 mt-1">Review tài liệu requirement</p>
                  </div>
                  <div className="flex items-center text-red-500 text-xs font-medium">
                    <Clock className="w-3 h-3 mr-1" /> 今日まで (Hôm nay)
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 cursor-pointer transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded mb-1">
                      未着手 / To do
                    </span>
                    <h3 className="text-sm font-medium text-slate-800">週次レポートの作成</h3>
                    <p className="text-xs text-slate-500 mt-1">Làm báo cáo tuần</p>
                  </div>
                  <div className="flex items-center text-slate-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" /> 明日 (Ngày mai)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-base font-bold flex items-center text-slate-800">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" /> 最新メッセージ
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Tin nhắn mới nhất</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                2 未読 (2 chưa đọc)
              </span>
            </div>

            <div className="space-y-0 divide-y divide-slate-100">
              <div className="py-3 flex items-start cursor-pointer hover:bg-slate-50 px-2 -mx-2 rounded-lg transition-colors">
                <div className="relative">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nam&backgroundColor=ffdfbf"
                    alt="Nam"
                    className="w-10 h-10 rounded-full bg-orange-100"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-800">Nguyen Van Nam</span>
                    <span className="text-xs text-blue-600 font-medium">10:42</span>
                  </div>
                  <p className="text-sm text-slate-800 font-medium mt-0.5">
                    仕様について確認したいことがあります。(Tôi muốn confirm về spec)
                  </p>
                </div>
              </div>

              <div className="py-3 flex items-start cursor-pointer hover:bg-slate-50 px-2 -mx-2 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  Dev
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-800">開発チーム (Team Dev)</span>
                    <span className="text-xs text-blue-600 font-medium">09:15</span>
                  </div>
                  <p className="text-sm text-slate-800 font-medium mt-0.5">
                    <span className="text-blue-500">Hoa:</span> APIの実装が完了しました。(Đã code xong API)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="mb-4">
            <h2 className="text-base font-bold flex items-center text-slate-800">
              <AlertCircle className="w-5 h-5 mr-2 text-blue-600" /> 最新のお知らせ
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Thông báo / Bảng tin mới</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex p-3 border border-slate-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-red-50 rounded flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-xs text-red-500 font-bold">4月</span>
                <span className="text-lg font-black text-red-600 leading-none">30</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-bold text-slate-800 hover:text-blue-600">
                  4/30〜5/1の祝日休業のお知らせ
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Thông báo lịch nghỉ lễ 30/4 - 1/5. Vui lòng cập nhật tiến độ trước kì nghỉ...
                </p>
              </div>
            </div>

            <div className="flex p-3 border border-slate-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-emerald-50 rounded flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-xs text-emerald-500 font-bold">New</span>
                <BookOpen className="w-4 h-4 text-emerald-600 mt-0.5" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-bold text-slate-800 hover:text-blue-600">
                  報連相（ホウレンソウ）の基本ガイド
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Wiki: Hướng dẫn cơ bản về văn hóa Ho-Ren-So dành cho nhân viên mới...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
