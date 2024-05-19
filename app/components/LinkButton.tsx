import React from 'react';
import { Button, Link } from '../chakraProxy/index';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Button as={Link} href={props.href} colorScheme='teal' mt={4} size='md'>
      {props.children}
    </Button>
  );
};

export default LinkButton;
