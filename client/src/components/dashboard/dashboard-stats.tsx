import { Application, Project, Task, Team } from "@shared/schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CheckCircle, Clock, CircleAlert, Hourglass, UsersRound, FolderKanban, Briefcase } from "lucide-react";

interface DashboardStatsProps {
  projects?: Project[];
  applications?: Application[];
  team?: Team[];
  tasks?: Task[];
  userRole?: string | null;
}

export function DashboardStats({ 
  projects = [], 
  applications = [], 
  team = [], 
  tasks = [],
  userRole = null
}: DashboardStatsProps) {
  // Count projects by status
  const projectsCreated = projects.filter(p => p.creatorId === (userRole === 'creator' || userRole === 'both')).length;
  const projectsJoined = projects.filter(p => p.creatorId !== (userRole === 'joiner' || userRole === 'both')).length;
  
  // Count applications by status
  const pendingApplications = applications.filter(a => a.status === 'pending').length;
  const acceptedApplications = applications.filter(a => a.status === 'accepted').length;
  const rejectedApplications = applications.filter(a => a.status === 'rejected').length;
  
  // Count tasks by status
  const completedTasks = tasks.filter(t => t.status === 'done').length;
  const inProgressTasks = tasks.filter(t => t.status === 'inProgress').length;
  const todoTasks = tasks.filter(t => t.status === 'todo').length;
  
  // Determine which stats to display based on user role
  const isCreator = userRole === 'creator' || userRole === 'both';
  const isJoiner = userRole === 'joiner' || userRole === 'both';
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {isCreator && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between py-5 px-6">
            <CardTitle className="text-sm font-medium">Projects Created</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="py-0 px-6">
            <div className="text-2xl font-bold">{projectsCreated}</div>
            <p className="text-xs text-muted-foreground">
              Total projects you've created
            </p>
          </CardContent>
        </Card>
      )}
      
      {isJoiner && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between py-5 px-6">
            <CardTitle className="text-sm font-medium">Projects Joined</CardTitle>
            <UsersRound className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="py-0 px-6">
            <div className="text-2xl font-bold">{projectsJoined}</div>
            <p className="text-xs text-muted-foreground">
              Teams you're part of
            </p>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between py-5 px-6">
          <CardTitle className="text-sm font-medium">Applications</CardTitle>
          <FolderKanban className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="py-0 px-6">
          <div className="text-2xl font-bold">{applications.length}</div>
          <div className="flex items-center text-xs text-muted-foreground gap-2 mt-1">
            <span className="flex items-center">
              <Hourglass className="h-3 w-3 mr-1 text-yellow-500" />
              {pendingApplications} Pending
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
              {acceptedApplications} Accepted
            </span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between py-5 px-6">
          <CardTitle className="text-sm font-medium">Tasks</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="py-0 px-6">
          <div className="text-2xl font-bold">{tasks.length}</div>
          <div className="flex items-center text-xs text-muted-foreground gap-2 mt-1">
            <span className="flex items-center">
              <Clock className="h-3 w-3 mr-1 text-blue-500" />
              {todoTasks} Todo
            </span>
            <span className="flex items-center">
              <Activity className="h-3 w-3 mr-1 text-purple-500" />
              {inProgressTasks} In Progress
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
              {completedTasks} Done
            </span>
          </div>
        </CardContent>
      </Card>
      
      {team.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between py-5 px-6">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <UsersRound className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="py-0 px-6">
            <div className="text-2xl font-bold">{team.length}</div>
            <p className="text-xs text-muted-foreground">
              People working with you
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}