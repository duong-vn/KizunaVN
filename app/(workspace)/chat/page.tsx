import Link from "next/link";
import { MessageSquare, Users } from "lucide-react";

const chats = [
  { id: "team-dev", name: "開発チーム / Team Dev", unread: 2, latest: "APIの実装が完了しました" },
  { id: "nam", name: "Nguyen Van Nam", unread: 1, latest: "仕様について確認したいことがあります" },
  { id: "project-a", name: "Project A", unread: 0, latest: "進捗は80%です" },
];

export default function ChatListPage() {
  return (
    <main className="flex-1 overflow-auto p-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">チャット一覧画面</h2>
          <p className="text-sm text-slate-500">Màn hình DS Chat</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          {chats.map((chat) => (
            <Link
              key={chat.id}
              href={`/chat/${chat.id}`}
              className="flex items-center justify-between px-5 py-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{chat.name}</div>
                  <div className="text-xs text-slate-500">{chat.latest}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {chat.unread > 0 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600 font-semibold">
                    {chat.unread}
                  </span>
                )}
                <MessageSquare className="w-4 h-4 text-slate-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
