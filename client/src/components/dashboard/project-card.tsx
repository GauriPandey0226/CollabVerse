import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@shared/schema";
import { CalendarClock, Users, Layers } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";

// Project stages with descriptions and colors
const PROJECT_STAGES = {
  ideation: { 
    label: "Ideation", 
    description: "Plan and design your platform", 
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" 
  },
  mvp: { 
    label: "MVP", 
    description: "Build the first working version", 
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" 
  },
  beta: { 
    label: "Beta Launch", 
    description: "Real user testing and improvements", 
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" 
  },
  scaling: { 
    label: "Scaling & Monetization", 
    description: "Grow users and start revenue", 
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
  }
};

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  showApplyButton?: boolean;
  creatorName?: string;
}

export function ProjectCard({ project, onClick, showApplyButton, creatorName }: ProjectCardProps) {
  // Safely determine stage - default to ideation if not set
  const stage = project.stage || "ideation";
  const stageInfo = PROJECT_STAGES[stage as keyof typeof PROJECT_STAGES];
  const { user } = useAuth();
  
  // Determine if the current user is the creator of this project
  const isCreator = user?.id === project.creatorId;
  
  // Get creator label
  const getCreatorLabel = () => {
    if (isCreator) {
      return "Created by You";
    } else if (creatorName) {
      return `Created by ${creatorName}`;
    } else {
      return `Created by User ${project.creatorId}`;
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow bg-slate-50 dark:bg-slate-900">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <CardDescription className="text-xs">
              {getCreatorLabel()} • 
              {project.createdAt && (
                <span> {new Date(project.createdAt).toLocaleDateString()}</span>
              )}
            </CardDescription>
          </div>
          
          {/* Stage Badge */}
          <Badge 
            variant="outline" 
            className={`${stageInfo.color} flex items-center`}
          >
            <Layers className="h-3 w-3 mr-1" />
            {stageInfo.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-3">
        {/* Project Focus */}
        {project.focus && (
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
            Focus: {project.focus}
          </p>
        )}
      
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
          {project.description}
        </p>
        
        {project.skillsNeeded && project.skillsNeeded.length > 0 && (
          <div className="mb-3">
            <div className="text-xs font-medium mb-1.5">Skills needed:</div>
            <div className="flex flex-wrap gap-1">
              {project.skillsNeeded.slice(0, 3).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5">
                  {skill}
                </Badge>
              ))}
              {project.skillsNeeded.length > 3 && (
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  +{project.skillsNeeded.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap justify-between text-xs text-gray-500 dark:text-gray-400 gap-y-2">
          <div className="flex items-center mr-4">
            <Users className="h-3.5 w-3.5 mr-1" />
            <span>Team: 1-4 people</span>
          </div>
          {project.timeline && (
            <div className="flex items-center">
              <CalendarClock className="h-3.5 w-3.5 mr-1" />
              <span>{project.timeline}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-3 px-4">
        <Button onClick={onClick} className="w-full text-sm h-9">
          {showApplyButton ? "View & Apply" : "View Project"}
        </Button>
      </CardFooter>
    </Card>
  );
}
