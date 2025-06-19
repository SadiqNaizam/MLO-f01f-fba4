import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import PrimaryButton from './PrimaryButton';
import GoogleButton from './GoogleButton';
import TextLink from './TextLink';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you'd handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  }, [email, password, rememberMe]);

  const handleGoogleLogin = useCallback(() => {
    // In a real app, you'd handle Google login logic here
    console.log('Google login attempt');
  }, []);

  return (
    <Card className={cn('w-full max-w-sm bg-card text-card-foreground rounded-md shadow-md', className)}>
      <CardHeader className="p-6 text-center">
        <CardDescription>Please enter your details</CardDescription>
        <CardTitle className="text-3xl tracking-tight mt-1">Welcome back</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <Input
              id="email"
              type="email"
              placeholder="Email adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              className="w-full h-10 px-3 py-2 text-sm"
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
              className="w-full h-10 px-3 py-2 text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                aria-labelledby="rememberMeLabel"
              />
              <Label htmlFor="rememberMe" id="rememberMeLabel" className="text-sm font-normal text-foreground cursor-pointer select-none">
                Remember for 30 days
              </Label>
            </div>
            <TextLink href="#">Forgot password</TextLink>
          </div>

          <div className="space-y-4 pt-1"> {/* Adjusted top padding slightly */} 
            <PrimaryButton type="submit">Sign up</PrimaryButton>
            <GoogleButton type="button" onClick={handleGoogleLogin}>Sign in with Google</GoogleButton>
          </div>
        </form>

        <div className="mt-6 pt-2 text-center"> {/* Adjusted margin-top */} 
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <TextLink href="#" className="font-medium">Sign up</TextLink>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
