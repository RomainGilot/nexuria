import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

const breadcrumbItems = [
  { to: "/", label: "Tableau de bord" },
  { to: "/tickets", label: "Gestion des tickets" },
];

export function TicketPage({page}) {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
    </>
  )
}