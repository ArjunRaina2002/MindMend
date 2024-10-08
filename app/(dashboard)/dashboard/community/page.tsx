"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

type Post = {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: number;
};

const initialPosts: Post[] = [
  { id: 1, author: 'Jane Doe', content: 'Just completed a 10-day meditation challenge. Feeling so calm and centered!', likes: 15, comments: 3 },
  { id: 2, author: 'John Smith', content: 'Anyone have tips for managing work-related stress?', likes: 8, comments: 5 },
  { id: 3, author: 'Emily Brown', content: 'Grateful for this supportive community. You all make such a difference!', likes: 22, comments: 7 },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: 'You',
        content: newPost,
        likes: 0,
        comments: 0,
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Community</h1>

      <Card>
        <CardHeader>
          <CardTitle>Share Your Thoughts</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePostSubmit} className="space-y-4">
            <Input
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
            />
            <Button type="submit">Post</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Community Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            {posts.map((post) => (
              <div key={post.id} className="mb-6 pb-6 border-b last:border-b-0">
                <div className="flex items-center mb-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-2">
                    <p className="font-semibold">{post.author}</p>
                  </div>
                </div>
                <p className="mb-2">{post.content}</p>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <Button variant="ghost" size="sm">👍 {post.likes}</Button>
                  <Button variant="ghost" size="sm">💬 {post.comments}</Button>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}