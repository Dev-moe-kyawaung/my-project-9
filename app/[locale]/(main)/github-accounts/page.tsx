import { githubAccounts } from "@/lib/data/github-accounts";
import { ExternalLink } from "lucide-react";

export default function GitHubAccountsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-4xl font-display font-bold mb-8 text-center">
        GitHub <span className="text-cyber-cyan">Accounts</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubAccounts.map((account) => (
          <a
            key={account.id}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-card p-6 flex items-center justify-between group hover:border-cyber-cyan transition-all"
          >
            <div>
              <div className="font-bold text-white group-hover:text-cyber-cyan transition-colors">
                {account.label}
              </div>
              <div className="text-sm text-gray-500 truncate max-w-[200px]">
                {account.url}
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyber-cyan" />
          </a>
        ))}
      </div>
    </div>
  );
}
