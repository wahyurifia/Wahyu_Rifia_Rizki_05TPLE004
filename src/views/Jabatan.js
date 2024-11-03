import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
} from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
import { AddJabatan } from "./ui/Modal";
import { useEffect, useState } from "react";

const tableData =
{
  jabatan: "Kepala Bagian",
}

const Jabatan = () => {
  const [jabatans, setJabatans] = useState([]);

  const getJabatan = JSON.parse(localStorage.getItem("jabatans")) || []
  useEffect(() => {
    setJabatans(getJabatan);
  }, [])

  const removeUser = (index) => {
    const updatedJabatan = jabatans.filter((_, i) => i !== index);
    localStorage.setItem('jabatans', JSON.stringify(updatedJabatan));
    setJabatans(updatedJabatan);
  }

  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex gap-5">
            <CardTitle tag="h5">Data Jabatan</CardTitle>
            <AddJabatan />
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Kode Jabatan</th>
                <th>Jabatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {jabatans.map(({ jabatan }, index) => (
                <tr key={index} className="border-top">
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {"JAB0" + (index + 1)}
                  </td>
                  <td>{jabatan}</td>
                  <td>
                    <Button onClick={() => removeUser(index)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Jabatan;
