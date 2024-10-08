"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Smile, Meh, Frown } from 'lucide-react';

export default function DashboardPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, User!</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mood Today</CardTitle>
            <CardDescription>How are you feeling?</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-around">
            <Button variant="ghost"><Smile className="h-8 w-8 text-green-500" /></Button>
            <Button variant="ghost"><Meh className="h-8 w-8 text-yellow-500" /></Button>
            <Button variant="ghost"><Frown className="h-8 w-8 text-red-500" /></Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Goal</CardTitle>
            <CardDescription>Mindfulness sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">4 out of 6 sessions completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Appointment</CardTitle>
            <CardDescription>Upcoming therapy session</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Thursday, 3:00 PM</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">with Dr. Smith</p>
            <Button className="mt-4">Join Session</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Completed a mindfulness exercise - 2 hours ago</li>
            <li>Logged mood as "Happy" - Yesterday</li>
            <li>Attended group therapy session - 2 days ago</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}