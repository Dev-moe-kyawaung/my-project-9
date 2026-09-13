import { appCollection } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";

export default function AppsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-4xl font-display font-bold mb-4 text-center">
        App <span className="text-cyber-pink">Collection</span>
      </h1>
      <p className="text-center text-gray-400 mb-12">16 Production Applications</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {appCollection.map((app, index) => (
          <div 
            key={app.id}
            className="cyber-card p-6 text-center group cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-4">{app.icon}</div>
            <h3 className="font-bold text-white mb-2">{app.name}</h3>
            <span className={`inline-block px-3 py-1 rounded-full text-xs ${
              app.status === "New" ? "bg-cyber-cyan/20 text-cyber-cyan" :
              app.status === "Live" ? "bg-green-500/20 text-green-400" :
              "bg-gray-500/20 text-gray-400"
            }`}>
              {app.status}
            </span>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-5 h-5 mx-auto text-cyber-cyan" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
