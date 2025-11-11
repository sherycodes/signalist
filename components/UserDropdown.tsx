'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import NavItems from './NavItems';
import { Button } from './ui/button';

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex items-center gap-3 hover:bg-transparent dark:hover:bg-transparent cursor-pointer focus-visible:ring-0'
        >
          <Avatar className='size-8'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className='hidden md:block text-base font-medium text-gray-400'>
            Shery
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='text-gray-400'>
        <DropdownMenuLabel>
          <div className='flex items-center gap-3 py-2'>
            <Avatar className='size-10'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <span className='text-base font-medium'>Shery</span>
              <span className='text-sm text-gray-500'>contact@email.com</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='bg-gray-600' />
        <DropdownMenuItem className='text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer'>
          <LogOut className='size-4 mr-2 hidden sm:block' />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className='sm:hidden bg-gray-600' />
        <nav className='sm:hidden'>
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
