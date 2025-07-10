import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Laptop, Palette, Server } from "lucide-react"

const skills = [
  {
    name: "Frontend",
    icon: <Laptop className="w-8 h-8" />,
    description: "Development of interactive and responsive user interfaces",
  },
  {
    name: "Game Development with Unity 3D technology",
    icon: <Server className="w-8 h-8" />,
    description: " Development of video games for multiple platforms using Unity  2D & 3D technology",
  },
  {
    name: "Database",
    icon: <Database className="w-8 h-8" />,
    description: "Design and management of relational and NoSQL databases",
  },
  {
    name: "Web Design",
    icon: <Palette className="w-8 h-8" />,
    description: "Design of attractive and functional user experiences",
  },
  {
    name: "API Integration",
    icon: <Globe className="w-8 h-8" />,
    description: "Integration of external APIs and development of RESTful APIs",
  },
  {
    name: "Clean Code",
    icon: <Code className="w-8 h-8" />,
    description: "Writing clean, maintainable, and well-documented code",
  },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-4">My Skills ✔️</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        These are the main skills I have developed throughout my career as a developer. Each one represents an area in
        which I have specialized and continue to improve.
      </p>

      <div className="grid  sm:grid-cols-2 max-h-60 lg:grid-cols-3 gap-6 md:max-h-96  overflow-auto">
        {skills.map((skill) => (
          <Card key={skill.name} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">{skill.icon}</div>
                {skill.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{skill.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
