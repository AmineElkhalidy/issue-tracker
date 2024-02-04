import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <PencilSquareIcon />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
