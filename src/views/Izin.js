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
import { useState } from "react";

const tableData = [
  {
    name: "Wahyu Rifia Rizki",
    izin: "Pulang Lebih Awal",
    tanggal: "2023-05-10",
    jam: "10:35:00",
    keterangan: "Sakit",
    status: "Menunggu Konfirmasi",
  },
  {
    name: "Wahyu Rifia Rizki",
    izin: "Pulang Lebih Awal",
    tanggal: "2023-05-10",
    jam: "10:35:00",
    keterangan: "Sakit",
    status: "Menunggu Konfirmasi",
  },
  {
    name: "Wahyu Rifia Rizki",
    izin: "Pulang Lebih Awal",
    tanggal: "2023-05-10",
    jam: "10:35:00",
    keterangan: "Sakit",
    status: "Menunggu Konfirmasi",
  },
  {
    name: "Wahyu Rifia Rizki",
    izin: "Pulang Lebih Awal",
    tanggal: "2023-05-10",
    jam: "10:35:00",
    keterangan: "Sakit",
    status: "Menunggu Konfirmasi",
  },
  {
    name: "Wahyu Rifia Rizki",
    izin: "Pulang Lebih Awal",
    tanggal: "2023-05-10",
    jam: "10:35:00",
    keterangan: "Sakit",
    status: "Menunggu Konfirmasi",
  },

];

const Izin = () => {
  const [data, setData] = useState([
    {
      name: "Wahyu Rifia Rizki",
      izin: "Pulang Lebih Awal",
      tanggal: "2023-05-10",
      jam: "10:35:00",
      keterangan: "Sakit",
      status: "Menunggu Konfirmasi",
    },
    {
      name: "Dewi Ayu Pratiwi",
      izin: "Cuti Tahunan",
      tanggal: "2023-06-01",
      jam: "09:00:00",
      keterangan: "Perjalanan Keluarga",
      status: "Disetujui",
    },
    {
      name: "Budi Santoso",
      izin: "Pulang Lebih Awal",
      tanggal: "2023-07-15",
      jam: "12:00:00",
      keterangan: "Acara Keluarga",
      status: "Menunggu Konfirmasi",
    },
    {
      name: "Siti Nurjanah",
      izin: "Cuti Sakit",
      tanggal: "2023-08-22",
      jam: "08:00:00",
      keterangan: "Demam Tinggi",
      status: "Menunggu Konfirmasi",
    },
    {
      name: "Andi Prabowo",
      izin: "Pulang Lebih Awal",
      tanggal: "2023-09-10",
      jam: "15:30:00",
      keterangan: "Kepentingan Pribadi",
      status: "Ditolak",
    },
    {
      name: "Tina Hartati",
      izin: "Cuti Bersama",
      tanggal: "2023-10-05",
      jam: "09:00:00",
      keterangan: "Hari Raya",
      status: "Disetujui",
    },
    {
      name: "Joko Widodo",
      izin: "Pulang Lebih Awal",
      tanggal: "2023-11-01",
      jam: "13:00:00",
      keterangan: "Piknik Keluarga",
      status: "Menunggu Konfirmasi",
    },
    {
      name: "Sari Lestari",
      izin: "Cuti Melahirkan",
      tanggal: "2023-12-12",
      jam: "07:30:00",
      keterangan: "Persalinan",
      status: "Disetujui",
    },
    {
      name: "Rudi Hartono",
      izin: "Cuti Sakit",
      tanggal: "2023-12-25",
      jam: "10:00:00",
      keterangan: "Sakit Kepala",
      status: "Ditolak",
    },
    {
      name: "Faisal Ramadhan",
      izin: "Pulang Lebih Awal",
      tanggal: "2024-01-15",
      jam: "16:00:00",
      keterangan: "Acara Resmi",
      status: "Menunggu Konfirmasi",
    }

  ]);
  const removeData = (index) => {
    const updateData = data.filter((_, i) => i !== index);
    setData(updateData);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex gap-5">
            <CardTitle tag="h5">Daftar Izin Karyawan</CardTitle>

          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Izin</th>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>Keterangan</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ name, izin, tanggal, jam, keterangan, status }, index) => (
                <tr key={index} className="border-top">

                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {name}
                  </td>
                  <td>
                    {izin}
                  </td>
                  <td>
                    {tanggal}
                  </td>
                  <td>
                    {jam}
                  </td>
                  <td>
                    {keterangan}
                  </td>
                  <td>
                    {status}
                  </td>
                  <td>
                    <Button onClick={() => removeData(index)}>
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

export default Izin;
